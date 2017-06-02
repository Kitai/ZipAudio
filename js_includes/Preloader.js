$(document).ready(function() {

    console.log("Executed once");

    assert(typeof zipFile == "string", "zipFile variable is either undefined or ill-defined");

    assert(zipFile.match(/^https?:\/\/.+\.zip$/) != null, "Bad format for the URL provided as zipFile ("+zipFile+")");


    // Compatibility for Safari and others
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    // This object will contain the list of audio files to preload
    var audioRepository = {};
    //On crée une instance de zip
    var zip = new JSZip();


    //On utilise le JSZipUtils pour récupérer le fichier zip en ajax
    JSZipUtils.getBinaryContent(zipFile, function(error, data) {
        if(error) {
            throw error;
        }
        //On charge le flux de donnée dans l'objet zip
        zip.loadAsync(data).then(function() {
            //Pour chaque fichier du zip on crée une source audio
            zip.forEach(function(path, file){
                console.log(file);
                console.log(path);
                file.async('arraybuffer').then(function(content){
                    var blob = new Blob([content], {'type': 'audio/wav'});
                    var src = URL.createObjectURL(blob);
                    audioRepository[path] = src;
                });
            });
            console.log(audioRepository);
        });
    });


    // Using a 7ms delay should be enough, 
    // seem to remember that Alex said there was a 14ms refresh rate in Ibex (or something like that)
    (function(host, alternateHost, file){
      var ivl = setInterval(function() { 
                        // Replacing all audios with a blob URL
                        $("audio").each(function() {
                          var replaced = false;
                          var t = this;
                          $(t).find("source").each(function(){                          
                            if (typeof audioRepository[this.src] != "undefined"){
                              console.log("Replacing "+this.src+" with "+audioRepository[this.src]);
                              //this.src = audioRepository[this.src];
                              replaced = true;
                            }
                          });
                          if (replaced) {
                            //$(this).replaceWith(audio);
                            clearInterval(ivl);
                          }
                        });
      }, 7);
    }) ();
});
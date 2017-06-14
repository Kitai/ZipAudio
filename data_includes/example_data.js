var shuffleSequence = seq("intro");
var practiceItemTypes = ["practice"];

var zipFiles = ["http://files.lab.florianschwarz.net/ibexfiles/resources.zip"];

var defaults = [
    "LQuestion", {
        as: ["F","J"],
        randomOrder: false,
        showNumbers: false,
        presentHorizontally: true,
        autoFirstChar: true,
        leftComment: "<b>F</b>: Word",
        rightComment: "<b>J</b>: Not a word",
        audioType: "mpeg"
    }
];

var items = [

    ["intro", "Message", {
        html: "This is just a placeholder.",
        transfer: "click"
    }], 

    ["intro", "ZipPreloader", {
    }], 
    
    ["intro","LQuestion", {word: "plowl.mp3",right: 1}],
    ["intro","LQuestion", {word: "fout.mp3",right: 1}],
    ["intro","LQuestion", {word: "slox.mp3",right: 1}],
    ["intro","LQuestion", {word: "lub.mp3",right: 1}],
    ["intro","LQuestion", {word: "pobd.mp3",right: 1}],
    ["intro","LQuestion", {word: "pakth.mp3",right: 1}],
    ["intro","LQuestion", {word: "tertz.mp3",right: 1}],
    ["intro","LQuestion", {word: "foon.mp3",right: 1}],
    ["intro","LQuestion", {word: "smile.mp3",right: 0}],
    ["intro","LQuestion", {word: "golf.mp3",right: 0}],
    ["intro","LQuestion", {word: "worth.mp3",right: 0}],
    ["intro","LQuestion", {word: "duck.mp3",right: 0}],
    ["intro","LQuestion", {word: "beat.mp3",right: 0}],
    ["intro","LQuestion", {word: "nose.mp3",right: 0}],
    ["intro","LQuestion", {word: "loaf.mp3",right: 0}],
    ["intro","LQuestion", {word: "wine.mp3",right: 0}],

];

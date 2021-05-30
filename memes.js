window.onload = randomMeme;

const memeLst=[
    "assets/memes/bonk-pepe.JPG",
    "assets/memes/hehehe.JPG",
    "assets/memes/jesus-plz-no.JPG",
    "assets/memes/miley-is-my-idol.JPG",
    "assets/memes/what.JPG"
]

function randomMeme() {
    var randMeme = memeLst[Math.floor(Math.random() * memeLst.length)];
    document.getElementById("memeImg").src = randMeme;
    randomQuote();
    console.log(randMeme);
    updateDay();
}

var timer = setInterval(updateTime, 100);

function updateTime() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
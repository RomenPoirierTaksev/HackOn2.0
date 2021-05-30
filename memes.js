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


function getAllDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
  
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = mm + '/' + dd + '/' + yyyy;
    return today;
  }


  function updateDay() {
    // var d = new Date();
    document.getElementById("day").innerHTML = getAllDate()
}
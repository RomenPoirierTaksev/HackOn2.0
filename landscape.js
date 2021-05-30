window.onload = setUpPage;

const landscapeLst = [
    "assets/landscape/landscape1.jpg",
    "assets/landscape/landscape2.jpg",
    "assets/landscape/landscape3.jpg",
    "assets/landscape/landscape4.jpg",
    "assets/landscape/landscape5.jpg",
]
  
function setUpPage() {
    var randImg = randomLandscape();
    randomQuote();
    changeFontColor(randImg);
}

function randomLandscape() {
    var randImg = landscapeLst[Math.floor(Math.random() * landscapeLst.length)];
    document.getElementById("landscapeImg").src = randImg;
    return randImg;
}

function changeFontColor(randImg) {
    if (randImg == "assets/landscape/landscape2.jpg" ) {
        document.getElementById("innerquote").style.color = 'white';
    }
    if (randImg == "assets/landscape/landscape3.jpg") {
        document.getElementById("time").style.color = 'white';
    }
}

var timer = setInterval(updateTime, 100);

function updateTime() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

// document.getElementById("settingsBtn").addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   });
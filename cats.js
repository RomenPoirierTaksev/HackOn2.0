window.onload = randomCat;


const catLst = [
    "assets/cats/angry-cat.JPG",
    "assets/cats/mad-cat.JPG",
    "assets/cats/sake.JPG",
]
  
function randomCat() {
    var randCat = catLst[Math.floor(Math.random() * catLst.length)];
    document.getElementById("catImg").src = randCat;
}

var timer = setInterval(updateTime, 100);

function updateTime() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
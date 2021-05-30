window.onload = randomCat;


const catLst = [
    "assets/cats/angry-cat.JPG",
    "assets/cats/mad-cat.JPG",
    "assets/cats/sake.JPG",
    "assets/cats/186261438_3283355078433642_6078725195483182594_n.jpg",
    "assets/cats/192855203_228266365400164_4210257557973030815_n.jpg",
    "assets/dogs/48426321_940857262771093_7322826330947452928_n.jpg",
    "assets/dogs/49686277_1229024743917650_4849777633560363008_n.png",
    "assets/dogs/56852728_2673433466016420_6279720504374853632_n.jpg",

    "assets/dogs/127935738_1345305865815544_7366441803100724510_n.jpg",
    "assets/dogs/186261438_3283355078433642_6078725195483182594_n.jpg",
    "assets/dogs/193240534_346814333527085_4766711195574357313_n.jpg",
    "assets/dogs/doggy.JPG",
    "assets/dogs/shiba-sad.jpg"
]


const dogLst=[
   

]

function randomCat() {
    var randCat = catLst[Math.floor(Math.random() * catLst.length)];
    document.getElementById("catImg").src = randCat;
    randomQuote();
    updateDay();
}


var timer = setInterval(updateTime, 100);

function updateTime() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}



// var someDate = new Date();
// var numberOfDaysToAdd = 6;
// someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
// function updateDay() {
//     var dd = someDate.getDate();
//     var mm = someDate.getMonth() + 1;
//     var y = someDate.getFullYear();

// var someFormattedDate = dd + '/'+ mm + '/'+ y;
//     document.getElementById("day").innerHTML = someFormattedDate.toLocaleTimeString();
// }


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
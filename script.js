 var css = document.querySelector("h3");
 var color1 = document.querySelector(".color1");
 var color2 = document.querySelector(".color2");
 var body=document.getElementById("gradient");
 var randomBtn = document.getElementById("random");
 
function setGradient(){
    body.style.background = "linear-gradient(to right,"
    + color1.value 
    + ","
    +color2.value
    +")";
    css.textContent = body.style.background + ";";
}

function getRandomInt(max){
    return Math.floor((Math.random()*max));
}

function getRandomGradient(){
    var r1 = getRandomInt(256);
    var g1 = getRandomInt(256);
    var b1 = getRandomInt(256);
    var r2 = getRandomInt(256);
    var g2 = getRandomInt(256);
    var b2 = getRandomInt(256);
    var randomGradient = "linear-gradient(to right ,rgb("
    + r1 + "," + g1 + "," + b1 +"),rgb(" + r2 +"," + g2 + "," +b2 + "))";
    body.style.background =randomGradient;
    randomBtn.style.background = randomGradient;
    css.textContent = body.style.background + ";";

}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);  
randomBtn.addEventListener("click",getRandomGradient);


var red   = document.getElementById("red");
var green = document.getElementById("green");
var blue  = document.getElementById("blue");
var finalColor = document.getElementById("finalColor");
var back = document.getElementById("back");

coloring();

red.addEventListener('input',coloring);
green.addEventListener('input',coloring);
blue.addEventListener('input',coloring);
back.addEventListener('input',coloring);

function coloring(){
    var result = 'rgb('+red.value+','+green.value+','+blue.value+')';
    finalColor.style.backgroundColor = result;
    document.getElementById("redf").innerHTML = red.value;
    document.getElementById("greenf").innerHTML = green.value;
    document.getElementById("bluef").innerHTML = blue.value;
    if (back.checked){
        document.body.style.backgroundColor = result;
    } else {
        document.body.style.backgroundColor = "#ffff";
    }
}

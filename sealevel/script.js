//SEA LEVEL ACTIVITY

let plus = document.getElementById("seainc");
let minus = document.getElementById("seadec");
let waves = document.querySelector('.wave');
let waveshadow = document.querySelector('.wave2');
let sealevelImg = document.getElementById('sealevelimg');


plus.addEventListener('click',()=>
{
const seaHeight = waves.offsetHeight;
;
const sealevelImgHeight = sealevelImg.offsetHeight;
let x = 2 * parseInt(sealevelImgHeight)
console.log("sea "+sealevelImgHeight);
console.log(seaHeight);
if(seaHeight >= 315){
    sealevelImg.src = "img/city.png";
}

if(seaHeight <= x){

    const newSeaHeight = seaHeight + 60;

    waves.style.height = newSeaHeight + "px";
}else{
    alert("hey !!! the city is fully drowned!");
}

            

})

minus.addEventListener('click',()=>
{
const seaHeight = waves.offsetHeight;
const sealevelImgHeight = sealevelImg.offsetHeight;
console.log("sea"+sealevelImgHeight);
console.log(seaHeight);
let y = parseInt(sealevelImgHeight) - 50;
if(seaHeight >= 85){
    if(seaHeight <= 315){
        sealevelImg.src = "img/city44.png";
        
    }
    const newSeaHeight = seaHeight - 60;
    waves.style.height = newSeaHeight + "px";
    waveshadow.style.height = newSeaHeight + "px";
    

}else{
    alert("hey !!! the city is suffering from drought");
}


            

})
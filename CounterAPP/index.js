let count = 0;

const countVal =document.getElementById("countVal");
const addBtn = document.getElementById("plus");
const subBtn = document.getElementById("minus");
const pengObj = document.getElementById("peng");
const pengObjContainer = document.getElementById("pengContainer");


countVal.innerText = count;


addBtn.addEventListener("click",()=>{
    count++;
    countVal.innerText = count;
    pengObj.src ="img/up.png";
    pengObj.style.display= "block";
    var currentPosition = parseInt(pengObjContainer.style.top) || 0; 
    var newPosition = currentPosition - 10; 
    pengObjContainer.style.top = newPosition + 'px';
})

subBtn.addEventListener("click",()=>{
    count--;
    countVal.innerText = count;
    pengObj.src ="img/down.png";
    pengObj.style.display= "block";
    var currentPosition = parseInt(pengObjContainer.style.top) || 0; 
    var newPosition = currentPosition + 10; 
    pengObjContainer.style.top = newPosition + 'px';
})
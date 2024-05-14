const verticalRuler = document.getElementById('verticalRuler');

function createRulerMarks() {
    const rulerHeight = verticalRuler.clientHeight;
    const markInterval = 8; 

    let j = 0;
    for (let i = 0; i <= rulerHeight; i += markInterval) {
        const mark = document.createElement('li');
        mark.classList.add('mark');
        mark.style.top = i + 'px';
        verticalRuler.appendChild(mark);

        if (j % 5 === 0) {
            mark.classList.add('ru');
        }

        j++;
    }
}

createRulerMarks();




const plus = document.querySelector('.plus-inp');
const minus = document.querySelector('.minus-inp');
const waves = document.querySelector('.foot');
const indicator = document.querySelector('.indicator-container');
let h = waves.getBoundingClientRect();
console.log(h.height);
console.log(waves.clientHeight);
let e = window.innerHeight - h.height;
console.log(e);
console.log(getComputedStyle(indicator).bottom)
let indicatorBottom = parseInt(getComputedStyle(indicator).bottom, 10);


let counter = 0;
plus.addEventListener('click',()=>
{
    const seaHeight = waves.offsetHeight;
                const indicatorTop = parseInt(getComputedStyle(indicator).top, 10);

                
                const newSeaHeight = seaHeight + 20;
                const newIndicatorTop = indicatorTop - 10; 

                waves.style.height = newSeaHeight + "px";
                indicator.style.top = newIndicatorTop + "px";

                let inicatorValue = document.querySelector('.indicate-value').innerHTML;
console.log(inicatorValue);

document.querySelector('.indicate-value').innerHTML = parseInt(inicatorValue) + 50 ; 

})
minus.addEventListener('click',()=>
{
    const seaHeight = waves.offsetHeight;
                const indicatorTop = parseInt(getComputedStyle(indicator).top, 10);

                
                const newSeaHeight = seaHeight - 20; 
                const newIndicatorTop = indicatorTop + 10; 

                waves.style.height = newSeaHeight + "px";
                indicator.style.top = newIndicatorTop + "px";

                let inicatorValue = document.querySelector('.indicate-value').innerHTML;
console.log(inicatorValue);

document.querySelector('.indicate-value').innerHTML = parseInt(inicatorValue) - 50 ; 

})
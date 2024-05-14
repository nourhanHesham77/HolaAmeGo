
var gtBtn = document.getElementById("gtBtn");
var gtAllBtn = document.getElementById("gtAllBtn");
let pokemonInp = document.getElementById('pokemonName');
var selectAllOpt = document.getElementById("poke");
var alertMsg = document.getElementById("msg");
let compName = '';
var URName;
async function getPokemon(){
    try{
        let pokemonName;
        if(pokemonInp.style.display != 'none'){
            pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        }else{
            pokemonName = selectAllOpt.value;
        }
        
        const res =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!res.ok){
            throw new Error("Oops!")
        }
        const data = await res.json();
        const pokemonImg = data.sprites.front_default;
        const pokeImgElement = document.getElementById('pokeImg');
        pokeImgElement.src = pokemonImg;
        pokeImgElement.style.display = "block";
        URName = data.name;
    }catch(error){
        console.log(error);
    }
}
// gtBtn.onclick = getPokemon();

async function getCompPokemon(){
    try{
        let randNum = Math.floor((Math.random() * 50));
        const res =  await fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`);
        if(!res.ok){
            throw new Error("Oops!")
        }
        const data = await res.json();
        console.log(data);
        const pokemonImg = data.sprites.front_default;
        const pokeImgElement = document.getElementById('pokeCompImg');
        pokeImgElement.src = pokemonImg;
        pokeImgElement.style.display = "block";
        compName= data.name;
        console.log(compName);
        
    }catch(error){
        console.log(error);
    }
}

async function getAllPokemon(){
    try{
        pokemonInp.style.display = 'none';
        selectAllOpt.style.display = 'inline-flex';
        for(var i=1; i<=52 ; i++){
            const res =  await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        if(!res.ok){
            throw new Error("Oops!")
        }
        const data = await res.json();
            let pokemonNames = data.forms[0].name;
            selectAllOpt.innerHTML +=`<option value="${i}">${pokemonNames}</option>`
        }
        
    }catch(error){
        console.log(error);
    }
}
// async function getAllPokemon(){
//     try{
//         const res =  await fetch(`https://pokeapi.co/api/v2/pokemon/`);
//         if(!res.ok){
//             throw new Error("Oops!")
//         }
//         const data = await res.json();
//         // console.log(data);
        
//         pokemonInp.style.display = 'none';
//         selectAllOpt.style.display = 'inline-flex';
//         for(var i=0; i<=20 ; i++){
//             let pokemonNames = data.results[i].name;
//             selectAllOpt.innerHTML +=`<option value="${i}">${pokemonNames}</option>`
//         }
        
//     }catch(error){
//         console.log(error);
//     }
// }

async function handleClick() {
    await getPokemon();
    await getCompPokemon();
    if (compName && URName) {
        if (compName === URName) {
            alert("It's a tie!");
            alertMsg.innerHTML ="Well Done! It's a tie!"
            alertMsg.style.color = "green";
        } else {
            alertMsg.innerHTML ="Oops! u failed!"
            alertMsg.style.color = "red";
        }
        console.log(`compName: ${compName}`);
        console.log(`URName: ${URName}`);
    } else {
        alert("Something went wrong, please try again , u have to pick a pokemon");
    }
}
gtAllBtn.addEventListener('click',getAllPokemon);
gtBtn.addEventListener('click', handleClick);
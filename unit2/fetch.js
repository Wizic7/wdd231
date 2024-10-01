// fetch.js
const output = document.querySelector("#pokemon");

const urlList = "https://pokeapi.co/api/v2/pokemon";
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;

function doStuffList(data) {}
async function getPokemonList(urlList) {
    const responseList = await fetch(urlList);
    //check to see if the fetch was successful
    if (responseList.ok) {
      // the API will send us JSON...but we have to convert the response before we can use it
      // .json() also returns a promise...so we await it as well.
      const data = await responseList.json();
      data.results.array.forEach((element) =>  {getPokemon("https://pokeapi.co/api/v2/pokemon/" + element.name);
        
      });
    }
}

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results);
  start = document.querySelector("#start");
  start.insertAdjacentHTML("afterend",` <div class="pokemon">
  <h1>${capitalizeFirstLetter(data.name)}</h1>
  <img src="${data.sprites.front_default}" alt="${data.name}">
  </div>
  `)
}
getPokemon(url);
getPokemonList(urlList);
console.log("second: ", results);


async function pokeCarousel(data, count){
    

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
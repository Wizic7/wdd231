import { getRecipies } from "./recipie.mjs";

let cookies = getRecipies();
console.log(cookies);

init();

function init(){
    let card = document.querySelector(".recipies");
    let htmlToInsert = cookies.map(recipeCardTemplate);

    card.innerHTML = htmlToInsert.join("");
    getType(cookies, "traditional");
}

function recipeCardTemplate(info){
    return `        
        <div class="recipie">
            <h2>${info.recipe_name}</h2>
            <img src="${info.image}" alt="${info.notes}">
            <p class="${info.type}"></p>
        </div>`;
}

function getType(data, selector) {
    const tradContainer = document.querySelector('.' + selector);
    const trad = data.find((data) => data.type === selector + "");
    tradContainer.innerHTML = trad.recipe_name;
}


import { getParkData, getParkInfoLinks, getJson} from "./parkService.mjs";
import { mediaCardTemplate} from "./templates.mjs";
import { setFooter, setHeaderInfo} from "./setHeaderFooter.mjs";





async function init() {
    
    const parkData = await getParkData();
    const parkInfoLinks = getParkInfoLinks(parkData);
    setHeaderInfo(parkData);
    setIntro(parkData);
    setParkInfo(parkInfoLinks);
    setFooter(parkData);

    enableNavigation();
}

init();

function setIntro(park){
    document.querySelector(".intro").innerHTML=
    `<h1>${park.fullName}</h1>
    <p>${park.description}</p>`;
}

function setParkInfo(info){
    let card = document.querySelector(".info");
    let htmlToInsert = info.map(mediaCardTemplate);
    card.innerHTML = htmlToInsert.join("");
}

function enableNavigation() {

let menuButton = document.querySelector("#global-nav-toggle")

menuButton.addEventListener("click", (event) => {
    let target = event.target;
    // toggle the show class on the global-nav
    let global_nav_class = document.querySelector(".global-nav").classList
    global_nav_class.toggle("show");
    // check to see if target is the button or something inside the button
    if(target.tagName != "BUTTON")
    {
        target = target.closest("button");
    }
    // check to see if we just opened or closed the menu
        if(global_nav_class.contains("show")){
            // if we opened it then set the aria-expanded attribute on the button to true
            target.ariaExpanded = true
        }
        else {
            // if we closed it then set the aria-expanded attribute on the button to false
            target.ariaExpanded = false;
        }
});
}
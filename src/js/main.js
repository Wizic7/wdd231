import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate} from "./templates.mjs";
import { setFooter, setHeaderInfo} from "./setHeaderFooter.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();


function init() {
    setHeaderInfo();
    setIntro(parkData);
    setParkInfo(parkInfoLinks);
    setFooter(parkData);
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



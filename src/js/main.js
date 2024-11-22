import { getParkData, getParkInfoLinks, getJson} from "./parkService.mjs";
import { mediaCardTemplate} from "./templates.mjs";
import { setFooter, setHeaderInfo} from "./setHeaderFooter.mjs";
import { enableNavigation } from "./navigation.mjs";




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



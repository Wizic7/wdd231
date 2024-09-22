import { getParkData } from "./parkService.mjs";

const parkData = getParkData();



function init() {
    updateDisclaimer(parkData);
    document.querySelector("title").innerHTML=parkData.fullName;
    document.querySelector(".hero-banner").innerHTML=bannerTemplate(parkData);
  }
  init();

function updateDisclaimer(park){
    let disclaimer = document.querySelector(".disclaimer a");
    disclaimer.innerHTML=park.fullName;
    disclaimer.href=park.url;
}

function bannerTemplate(park){
    return `
    <img src="${park.images[0].url}" alt="${park.images[0].altText}" />
    <div class="hero-banner__content">
    <a href="#" class="hero-banner__title">${park.name}</a>
    <p class="hero-banner__subtitle">
        <span>${park.designation}</span>
        <span>${park.states}</span>
    </p>
    </div>
    `;
}


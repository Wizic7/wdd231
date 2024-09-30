import { getParkData, getParkInfoLinks } from "./parkService.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();


function init() {
    setHeaderInfo();
    setIntro(parkData);
    setParkInfo(parkInfoLinks);
    setFooter(parkData);
}

init();

function setHeaderInfo() {
    updateDisclaimer(parkData);
    document.querySelector("title").innerHTML=parkData.fullName;
    document.querySelector(".hero-banner").innerHTML=bannerTemplate(parkData);
}

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

function mediaCardTemplate(info){
    return `<div class="media-card">
    <a href="${info.link}"><img src="${info.image}" alt="${info.description}"></a>
        <a href="${info.link}">${info.name}</a>
        <p>${info.description}</p>
    </div>`;
}

function setFooter(park){
    const email = park.contacts.emailAddresses[0].emailAddress;
    const voice = getVoicePhone(park.contacts.phoneNumbers)
    console.log(voice);
    document.querySelector("#park-footer").innerHTML = `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${email}<p>
    <p>Yellowstone National Park, WY 82190-0168</p></div>
    <h4>Phone:</h4>
    <p>${voice.phoneNumber}</p>
    </section>`;
}

  function getVoicePhone(phonenumbers) {
    const voice = phonenumbers.find((phoneNumber) => phoneNumber.type === "Voice");
    return voice;
  }

import { getParkData, getParkInfoLinks } from "./parkService.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();

export function mediaCardTemplate(info){
    return `<div class="media-card">
    <a href="${info.link}"><img src="${info.image}" alt="${info.description}"></a>
        <a href="${info.link}">${info.name}</a>
        <p>${info.description}</p>
    </div>`;
}

export function bannerTemplate(park){
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
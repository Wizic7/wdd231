import spritePath from '../images/sprite.symbol.svg'

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

export function alertTemplate(data){
    let alertType = data.category.toLowerCase();
    if(alertType.includes("closure")) {
        alertType = "closure";
    }
    return `
    <li>
    <svg class="icon" focusable="false" aria-hidden="true">
      <use xlink:href="${spritePath}#alert-${alertType}"></use>
    </svg>
    <p class="alert-header alert-${alertType}">${data.title}</p>
    <p>${data.description}</p>
    </li>
    `
}

export function visitor_centersTemplate(data){
    return `<li class="visitor-center">
            <h3>${data.name}</h3>
            <p>${data.description}</p>
            <p>${data.directionsInfo}</p>
            </li>`;
}

export function activitiesTemplate(data){
    return `<li class="activity">
            <p>${data.name}</p>
            </li>`;
}
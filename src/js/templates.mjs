import spritePath from '../images/sprite.symbol.svg'

export function listTemplate(data, contentTemplate) {
    const html = data.map(contentTemplate);
    return `<ul>${html.join("")}</ul>`;
}

export function vcInfoTemplate(data)
{
    return `<figure>
                <img src="${data.images[0].url}" alt="${data.images[0].altText}" />
                <figcaption>
                ${data.images[0].title} 
                <span>${data.images[0].credit}</span>
                </figcaption>
            </figure>
            <p>${data.description}</p> `
}

export function iconTemplate(iconId) {
    return `<svg class="icon" role="presentation" focusable="false">
                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/images/sprite.symbol.svg#${iconId}"
                ></use> 
            </svg>`;
}

export function vcImageTemplate(data) {
    return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
}

export function vcAmenitiesTemplate(data) 
{
    return  `<li>${data}</li>`
}

export function vcContactTemplate(data)
{
    const phoneNumbersHTML = data.phoneNumbers.map(vcPhoneSections).join("");
    return `<section class="vc-contact__email">
                <h3>Email Address</h3>
                <a href="email:${data.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
            </section>
            <section class="vc-contact__phone">
                <h3>Phone numbers</h3>
                ` + phoneNumbersHTML + `
            </section>`
}

function vcPhoneSections(data)
{
    return iconTemplate("phone") + `<a href="tel:+1${data.phoneNumber}">${data.type}</a>`
}

export function vcAdressesSectionTemplate(data)
{
    return `<section class="vc-addresses__${data.type.toLowerCase()}">
                <h3>${data.type} Address</h3>
                <address>
                    ${data.line1}<br />
                    ${data.city}, ${data.stateCode} ${data.postalCode}
                </address>
            </section>`
}


export function vcDetailsTemplate(elementId, summaryText, iconId, content) {
    return `<details name="vc-details" id="${elementId}">
                <summary>
                    ${iconTemplate(iconId)}
                    ${summaryText}
                </summary>
                ${content}
            </details>`;
}

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
            <h3><a href="visitor-center.html?id=${data.id}">${data.name}</a></h3>
            <p>${data.description}</p>
            <p>${data.directionsInfo}</p>
            </li>`;
}

export function activitiesTemplate(data){
    return `<li class="activity">
            <p>${data.name}</p>
            </li>`;
}
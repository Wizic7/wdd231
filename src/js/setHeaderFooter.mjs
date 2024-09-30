import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import { bannerTemplate } from "./templates.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();

export function setHeaderInfo() {
    updateDisclaimer(parkData);
    document.querySelector("title").innerHTML=parkData.fullName;
    document.querySelector(".hero-banner").innerHTML=bannerTemplate(parkData);
}

function updateDisclaimer(park){
    let disclaimer = document.querySelector(".disclaimer a");
    disclaimer.innerHTML=park.fullName;
    disclaimer.href=park.url;
}

export function setFooter(park){
    const email = park.contacts.emailAddresses[0].emailAddress;
    const voice = getVoicePhone(park.contacts.phoneNumbers)

    document.querySelector(".park-footer").innerHTML = `<section class="contact">
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
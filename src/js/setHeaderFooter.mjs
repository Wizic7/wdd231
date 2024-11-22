import { bannerTemplate } from "./templates.mjs";
import { enableNavigation } from "./navigation.mjs";

export function setHeaderInfo(park) {
    updateDisclaimer(park);
    document.querySelector("title").innerHTML=park.fullName;
    document.querySelector(".hero-banner").innerHTML=bannerTemplate(park);
}

function updateDisclaimer(park){
    let disclaimer = document.querySelector(".disclaimer a");
    disclaimer.innerHTML=park.fullName;
    disclaimer.href=park.url;
}

export function setFooter(park){
    const email = park.contacts.emailAddresses[0].emailAddress;
    const voice = getVoicePhone(park.contacts.phoneNumbers);
    let mailing = getMailingAddress(park.addresses);

    document.querySelector(".park-footer").innerHTML = `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div>
      <p>${mailing.line1}</p>
      <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
    </div>

    <h4>Email:</h4>
    <p>${email}<p>
  
    <h4>Phone:</h4>
    <p>${voice.phoneNumber}</p>
    </section>`;
}

function getMailingAddress(addresses) {
  const mailing = addresses.find((address) => address.type === "Mailing");
  return mailing;
}

function getVoicePhone(phonenumbers) {
  const voice = phonenumbers.find((phoneNumber) => phoneNumber.type === "Voice");
  return voice;
}
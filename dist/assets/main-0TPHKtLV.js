(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();const a="https://developer.nps.gov/api/v1/",c="x3pbMYbYhIdGy5ld6cIbZ7nzoQ80sx4vj4Jz5UdK",l="?parkCode=glac";async function d(){const e={method:"GET",headers:{"X-Api-Key":c}};let t={};const i=await fetch(a+"parks"+l,e);if(i.ok)t=await i.json();else throw new Error("response not ok");return t.data[0]}function u(e){return[{name:"Current Conditions &#x203A;",link:"conditions.html",image:e.images[2].url,description:"See what conditions to expect in the park before leaving on your trip!"},{name:"Fees and Passes &#x203A;",link:"fees.html",image:e.images[3].url,description:"Learn about the fees and passes that are available."},{name:"Visitor Centers &#x203A;",link:"visitor_centers.html",image:e.images[4].url,description:"Learn about the visitor centers in the park."}]}function m(e){return`<div class="media-card">
    <a href="${e.link}"><img src="${e.image}" alt="${e.description}"></a>
        <a href="${e.link}">${e.name}</a>
        <p>${e.description}</p>
    </div>`}function p(e){return`
    <img src="${e.images[0].url}" alt="${e.images[0].altText}" />
    <div class="hero-banner__content">
    <a href="#" class="hero-banner__title">${e.name}</a>
    <p class="hero-banner__subtitle">
        <span>${e.designation}</span>
        <span>${e.states}</span>
    </p>
    </div>
    `}function f(e){h(e),document.querySelector("title").innerHTML=e.fullName,document.querySelector(".hero-banner").innerHTML=p(e)}function h(e){let t=document.querySelector(".disclaimer a");t.innerHTML=e.fullName,t.href=e.url}function g(e){const t=e.contacts.emailAddresses[0].emailAddress,i=b(e.contacts.phoneNumbers);let o=y(e.addresses);document.querySelector(".park-footer").innerHTML=`<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div>
      <p>${o.line1}</p>
      <p>${o.city}, ${o.stateCode} ${o.postalCode}</p>
    </div>

    <h4>Email:</h4>
    <p>${t}<p>
  
    <h4>Phone:</h4>
    <p>${i.phoneNumber}</p>
    </section>`}function y(e){return e.find(i=>i.type==="Mailing")}function b(e){return e.find(i=>i.type==="Voice")}async function v(){const e=await d(),t=u(e);f(e),$(e),L(t),g(e)}v();function $(e){document.querySelector(".intro").innerHTML=`<h1>${e.fullName}</h1>
    <p>${e.description}</p>`}function L(e){let t=document.querySelector(".info"),i=e.map(m);t.innerHTML=i.join("")}

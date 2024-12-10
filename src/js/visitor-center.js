import { getParkData, getParkVisitorCenterDetails} from "./parkService.mjs";
import { setFooter, setHeaderInfo} from "./setHeaderFooter.mjs";
import { iconTemplate, listTemplate, vcContactTemplate, vcAdressesSectionTemplate, vcImageTemplate, vcInfoTemplate, vcAmenitiesTemplate, vcDetailsTemplate} from "./templates.mjs";

init(); 
async function init() {
    
    const parkData = await getParkData();
    setHeaderInfo(parkData);
    setFooter(parkData);

    const Id = getParams("id");
    const Centerdata = await getParkVisitorCenterDetails(Id);
    console.log(Centerdata);


    const galleryHTML = listTemplate(Centerdata.images, vcImageTemplate);
    document.querySelector('.vc-gallery').insertAdjacentHTML("beforeend", galleryHTML);

    //set name & info sections
    document.querySelector('.vc-name').innerHTML = iconTemplate("ranger-station") + Centerdata.name;
    document.querySelector('.vc-info').innerHTML = vcInfoTemplate(Centerdata);

    const detailList = document.querySelector('.vc-details-list');

    let addresses = Centerdata.addresses.map(vcAdressesSectionTemplate);
    const addressHTML = vcDetailsTemplate("vcAddresses", "Addresses", "heading-icon_map-pin", addresses.join(""));
    const directionsHTML = vcDetailsTemplate("vcDirections", "Directions", "directions", `<p>${Centerdata.directionsInfo}</p>`);
    const amenitiesHTML = vcDetailsTemplate("vcAmenities", "Amenities", "heading-icon_info", listTemplate(Centerdata.amenities, vcAmenitiesTemplate));
    const contactHTML = vcDetailsTemplate("vcContact", "Contact Information", "phone", vcContactTemplate(Centerdata.contacts));

    detailList.insertAdjacentHTML("beforeend", addressHTML);
    detailList.insertAdjacentHTML("beforeend", directionsHTML);
    detailList.insertAdjacentHTML("beforeend", amenitiesHTML);
    detailList.insertAdjacentHTML("beforeend", contactHTML);
}

function getParams(param)
{
    const paramString = window.location.search;
    const param_list = new URLSearchParams(paramString);
    return param_list.get(param);
}





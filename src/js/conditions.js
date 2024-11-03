import { getParkData, getAlertData, getVisitorCenterData, getActivityData} from "./parkService.mjs";
import { setFooter, setHeaderInfo} from "./setHeaderFooter.mjs";
import { alertTemplate, visitor_centersTemplate, activitiesTemplate } from "./templates.mjs";


function setAlerts(data){
    let list = document.querySelector(".alerts ul");
    let htmlToInsert = data.map(alertTemplate);
    list.innerHTML = htmlToInsert.join("");
}

function setVisitorCenters(data){
    let list = document.querySelector(".visitor ul");
    let htmlToInsert = data.map(visitor_centersTemplate);
    list.innerHTML = htmlToInsert.join("");
}

function setActivities(data){
    let list = document.querySelector(".activities ul");
    let htmlToInsert = data.map(activitiesTemplate);
    list.innerHTML = htmlToInsert.join("");
}



async function init() {
    
    const parkData = await getParkData();

    setHeaderInfo(parkData);
    setFooter(parkData);

    const alerts = await getAlertData();
    const visitor_centers = await getVisitorCenterData();
    const activities = await getActivityData();

    setAlerts(alerts);
    setVisitorCenters(visitor_centers);
    setActivities(activities);
}

init();
// api.js

//Answers (Start with https://developer.nps.gov/api/v1/)
//Parks in Idaho = parks?start=0&q=ID
//Campgrounds in City of Rocks = campgrounds?limit=100&start=0&q=city%20of%20rocks
//Parks with Camping = activities/parks?q=climbing&start=0
//Bear Pictures = multimedia/galleries?q=bear
//Bear Cams = webcams?q=bear


//const baseUrl = "https://random-d.uk/api/v2/quack";
const baseUrl = "https://app.ammoreadycloud.com/api/v2/";
getJson("catalog");
async function getJson(endpoint) {
  // replace this with your actual key
  const user = "22090595219092";
  const password = "EATuSm-mCyGQIguNAoX_hNYxNTEt9to5tn24VJD6";
  const apiKey = "";
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + endpoint;
  // set the options. The important one here is the X-Api-Key
  const options = {
    method: "GET",
    headers: {
      'Authorization': `Basic ${user}:${password}`,
      "Content-Type": "application/json",
      "X-Api-Key": apiKey,
      }
  }
  // make the request
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}








async function renderClimbingList() {
  const climbingData = await getJson(`activities/parks?q=climbing`);
  let parks = climbingData.data[0].parks
  console.log(parks);
  let List = document.querySelector("#outputList");
  let htmlToInsert = parks.map(listTemplate);
  List.innerHTML = htmlToInsert.join("");
}

// We should include the Name of the park, 
// the state it is in, and make the 
// name a link which links to the official URL for the park

function listTemplate(item) {
  return `      <li>
        <a href="${item.url}">${item.fullName}</a>
        ${item.states}
      </li>`;
}
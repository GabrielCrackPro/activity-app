const activityContainer = document.querySelector(".activity-container");
const API_URL = "http://www.boredapi.com/api/activity";

const getData = async (url) => {
  let data = await fetch(url).then((response) => response.json());
  return data;
};
const showActivity = async () => {
  let data = await getData(API_URL);
  activityContainer.innerHTML = `
  <h3 class="activity-color activity-border fw-bold mb-2">${data.activity}</h3>
  <h4 class="activity-color text-capitalize">Type: ${data.type}</h4>
  <h4 class="activity-color text-capitalize">Participants: ${data.participants}</h4>
  <h4 class="activity-color text-capitalize">Price: ${data.price} <a href="http://www.boredapi.com/api/activity?price=${data.price}" target="blank" class="btn btn-sm activity-bg text-white">See similar</a></h4>
  <h4 class="activity-color text-capitalize">Accessibility: ${data.accessibility} <a href="http://www.boredapi.com/api/activity?accessibility=${data.accessibility}" target="blank" class="btn btn-sm activity-bg text-white">See similar</a></h4>

  `;
};
window.onload = showActivity;

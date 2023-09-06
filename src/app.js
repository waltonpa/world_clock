function updateCities() {
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");

    parisDateElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("MMMM Do, YYYY");
    parisTimeElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss a");
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");

    sydneyDateElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM Do, YYYY");
    sydneyTimeElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss a");
  }

  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDateElement = madridElement.querySelector(".date");
    let madridTimeElement = madridElement.querySelector(".time");

    madridDateElement.innerHTML = moment()
      .tz("Europe/Madrid")
      .format("MMMM Do, YYYY");
    madridTimeElement.innerHTML = moment()
      .tz("Europe/Madrid")
      .format("h:mm:ss a");
  }

  let saoPauloElement = document.querySelector("#sao-paulo");
  if (saoPauloElement) {
    let saoPauloDateElement = saoPauloElement.querySelector(".date");
    let saoPauloTimeElement = saoPauloElement.querySelector(".time");

    saoPauloDateElement.innerHTML = moment()
      .tz("America/Sao_Paulo")
      .format("MMMM Do, YYYY");
    saoPauloTimeElement.innerHTML = moment()
      .tz("America/Sao_Paulo")
      .format("h:mm:ss a");
  }

  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    losAngelesDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss a");
  }
}

function updateCity(event) {
  currentTimezone = event.target.value;
  if (currentTimezone === "current") {
    currentTimezone = moment.tz.guess();
  }
  currentCity = currentTimezone.replace("_", " ").split("/")[1];
  currentCityTime = moment().tz(currentTimezone);
  updateHTML();
}

function updateTime() {
  currentCityTime = moment().tz(currentTimezone);
  updateHTML();
}

function updateHTML() {
  let citiesElement = document.querySelector(".current");
  citiesElement.innerHTML = `
    <div class="current">
        <h2>
          This is the current time
          <div>in ${currentCity}</div>
        </h2>
        <div class="current-time">${currentCityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
        <h3>${currentCityTime.format("MMMM Do, YYYY")}</h3>
    </div>`;
}
let currentTimezone = moment.tz.guess();
let currentCity = currentTimezone.replace("_", " ").split("/")[1];
let currentCityTime = moment().tz(currentTimezone);

updateHTML(currentCity, currentCityTime);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

setInterval(updateTime, 1000);
setInterval(updateCities, 1000);
updateCities();

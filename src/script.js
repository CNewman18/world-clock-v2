function updateTime() {
  // New York

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkTime.format("Do MMMM YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss[<small>] A[</small>]"
  );

  // Dubai

  let dubaiElement = document.querySelector("#dubai");
  let dubaiDateElement = dubaiElement.querySelector(".date");
  let dubaiTimeElement = dubaiElement.querySelector(".time");
  let dubaiTime = moment().tz("Asia/Dubai");
  dubaiDateElement.innerHTML = dubaiTime.format("Do MMMM YYYY");
  dubaiTimeElement.innerHTML = dubaiTime.format("h:mm:ss[<small>] A[</small>]");

  // Chiang Mai

  let chiangMaiElement = document.querySelector("#chiang-mai");
  let chiangMaiDateElement = chiangMaiElement.querySelector(".date");
  let chiangMaiTimeElement = chiangMaiElement.querySelector(".time");
  let chiangMaiTime = moment().tz("Asia/Bangkok");
  chiangMaiDateElement.innerHTML = chiangMaiTime.format("Do MMMM YYYY");
  chiangMaiTimeElement.innerHTML = chiangMaiTime.format(
    "h:mm:ss[<small>] A[</small>]"
  );

  // Vienna

  let viennaElement = document.querySelector("#vienna");
  let viennaDateElement = viennaElement.querySelector(".date");
  let viennaTimeElement = viennaElement.querySelector(".time");
  let viennaTime = moment().tz("Europe/Vienna");
  viennaDateElement.innerHTML = viennaTime.format("Do MMMM YYYY");
  viennaTimeElement.innerHTML = viennaTime.format(
    "h:mm:ss[<small>] A[</small>]"
  );
}

function displayNewCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let newCityElement = document.querySelector("#new-city");
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  newCityElement.innerHTML = `  <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
        </div>
        <div class="time"> ${cityTime.format(
          "h:mm:ss"
        )}<small>${cityTime.format("A")}</small></div>
      </div>`;
}

updateTime();

setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", displayNewCity);

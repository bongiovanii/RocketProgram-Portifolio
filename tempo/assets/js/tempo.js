const apiKey = "34eb5a44dabbadddbd7599e6e4d1a18b";
const lang = "pt_br";
const units = "metric";
const cardEl = document.querySelector(".card");
const iconEl = document.querySelector(".icon");
const tempEl = document.querySelector("h2");
const minEl = document.querySelector(".min");
const maxEl = document.querySelector(".max");
const humidityEl = document.querySelector(".humidity span");
const windImgEl = document.querySelector(".wind img");
const windTextEl = document.querySelector(".wind span");
const inputEl = document.querySelector(".input input");
const buttonEl = document.querySelector(".input button");
const feelsLikeEl = document.querySelector(".feels-like span");

async function callApi() {
  try {
    const city = inputEl.value;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${lang}`
    );

    const data = await response.json();

    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    iconEl.src = iconUrl;

    tempEl.innerHTML = data.main.temp + "°";
    minEl.innerHTML = data.main.temp_min;
    maxEl.innerHTML = data.main.temp_max;
    feelsLikeEl.innerHTML = data.main.feels_like;
    humidityEl.innerHTML = data.main.humidity;
    windTextEl.innerHTML = data.wind.speed;

    windImgEl.style.transform = `rotate(${data.wind.deg}deg)`;

    cardEl.classList.add("active");
  } catch (err) {
    console.log(err);
    cardEl.classList.remove("active");
    alert("Ocorreu um erro");
  }
}

buttonEl.addEventListener("click", callApi);

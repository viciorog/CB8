const cityCoordinates = [
  { name: "Agrigento", value: "agrigento", lat: 37.31109, lon: 13.576548 },
  {
    name: "Alessandria Della Rocca",
    value: "alessandria+della+rocca",
    lat: 37.569617,
    lon: 13.453475,
  },
  { name: "Aragona", value: "aragona", lat: 37.407403, lon: 13.618945 },
  { name: "Bivona", value: "bivona", lat: 37.600231, lon: 13.416501 },
  { name: "Burgio", value: "burgio", lat: 37.613493, lon: 37.613493 },
  { name: "Calamonaci", value: "calamonaci", lat: 37.522529, lon: 13.318304 },
  {
    name: "Caltabellotta",
    value: "caltabellotta",
    lat: 37.57575,
    lon: 13.218615,
  },
  { name: "Camastra", value: "camastra", lat: 37.251284, lon: 13.794301 },
  { name: "Cammarata", value: "cammarata", lat: 37.632794, lon: 13.638671 },
  {
    name: "Campobello di Licata",
    value: "campobello+di+licata",
    lat: 37.258843,
    lon: 13.917697,
  },
  { name: "Canicattì", value: "canicattì", lat: 37.358179, lon: 13.85069 },
  {
    name: "Casteltermini",
    value: "casteltermini",
    lat: 37.540578,
    lon: 13.659427,
  },
  {
    name: "Castrofilippo",
    value: "castrofilippo",
    lat: 37.347488,
    lon: 13.749643,
  },
  {
    name: "Cattolica Eraclea",
    value: "cattolica+eraclea",
    lat: 37.440822,
    lon: 13.393837,
  },
  { name: "Cianciana", value: "cianciana", lat: 37.521316, lon: 13.432789 },
  { name: "Comitini", value: "comitini", lat: 37.408294, lon: 13.643691 },
  { name: "Favara", value: "favara", lat: 37.316048, lon: 13.662348 },
  { name: "Grotte", value: "grotte", lat: 37.402643, lon: 13.70114 },
  {
    name: "Joppolo Giancaxio",
    value: "joppolo+giancaxio",
    lat: 37.387886,
    lon: 13.555324,
  },
  {
    name: "Lampedusa e Linosa",
    value: "lampedusa+e+linosa",
    lat: 35.508622,
    lon: 12.59292,
  },
  { name: "Licata", value: "licata", lat: 37.101709, lon: 13.937331 },
  {
    name: "Lucca Sicula",
    value: "lucca+sicula",
    lat: 37.578822,
    lon: 13.306716,
  },
  { name: "Menfi", value: "menfi", lat: 37.619818, lon: 12.966582 },
  { name: "Montallegro", value: "montallegro", lat: 37.392754, lon: 13.352953 },
  { name: "Montevago", value: "montevago", lat: 37.705617, lon: 12.985167 },
  { name: "Naro", value: "naro", lat: 37.294829, lon: 13.795124 },
  {
    name: "Palma di Montechiaro",
    value: "palma+di+montechiaro",
    lat: 37.192928,
    lon: 13.761947,
  },
  {
    name: "Porto Empedocle",
    value: "porto+empedocle",
    lat: 37.28818,
    lon: 13.527172,
  },
  { name: "Racalmuto", value: "racalmuto", lat: 37.408681, lon: 13.732332 },
  { name: "Raffadali", value: "raffadali", lat: 37.398317, lon: 13.532123 },
  { name: "Ravanusa", value: "ravanusa", lat: 37.267919, lon: 13.973316 },
  { name: "Realmonte", value: "realmonte", lat: 37.317816, lon: 13.456957 },
  { name: "Ribera", value: "ribera", lat: 37.50317, lon: 13.266765 },
  {
    name: "Sambuca di Sicilia",
    value: "sambuca+di+sicilia",
    lat: 37.647714,
    lon: 13.111111,
  },
  {
    name: "San Biagio Platani",
    value: "san+biagio+platani",
    lat: 37.509293,
    lon: 13.524961,
  },
  {
    name: "San Giovanni Gemini",
    value: "san+giovanni+gemini",
    lat: 37.615139,
    lon: 13.647849,
  },
  {
    name: "Sant'Angelo Muxaro",
    value: "sant%27angelo+muxaro",
    lat: 37.480744,
    lon: 13.546203,
  },
  {
    name: "Santa Elisabetta",
    value: "	santa+elisabetta",
    lat: 37.443477,
    lon: 13.549476,
  },
  {
    name: "Santa Margherita di Belice",
    value: "santa+margherita+di+belice",
    lat: 37.691274,
    lon: 13.022594,
  },
  {
    name: "Santo Stefano Quisquina",
    value: "santo+stefano+quisquina",
    lat: 37.598643,
    lon: 13.520556,
  },
  { name: "Sciacca", value: "sciacca", lat: 37.501987, lon: 13.089437 },
  { name: "Siculiana", value: "siculiana", lat: 37.335445, lon: 13.421662 },
  {
    name: "Villafranca Sicula",
    value: "villafranca+sicula",
    lat: 37.587433,
    lon: 13.289238,
  },
];

// const cities = [
//   { name: "Agrigento", value: "agrigento" },
//   { name: "Alessandria Della Rocca", value: "alessandria+della+rocca" },
//   { name: "Aragona", value: "aragona" },
//   { name: "Bivona", value: "bivona" },
//   { name: "Burgio", value: "burgio" },
//   { name: "Calamonaci", value: "calamonaci" },
//   { name: "Caltabellotta", value: "caltabellotta" },
//   { name: "Camastra", value: "camastra" },
//   { name: "Cammarata", value: "cammarata" },
//   { name: "Campobello di Licata", value: "campobello+di+licata" },
//   { name: "Canicattì", value: "canicattì" },
//   { name: "Casteltermini", value: "casteltermini" },
//   { name: "Castrofilippo", value: "castrofilippo" },
//   { name: "Cattolica Eraclea", value: "cattolica+eraclea" },
//   { name: "Cianciana", value: "cianciana" },
//   { name: "Comitini", value: "comitini" },
//   { name: "Favara", value: "favara" },
//   { name: "Grotte", value: "grotte" },
//   { name: "Joppolo Giancaxio", value: "joppolo+giancaxio" },
//   { name: "Lampedusa e Linosa", value: "lampedusa+e+linosa" },
//   { name: "Licata", value: "licata" },
//   { name: "Lucca Sicula", value: "lucca+sicula" },
//   { name: "Menfi", value: "menfi" },
//   { name: "Montallegro", value: "montallegro" },
//   { name: "Montevago", value: "montevago" },
//   { name: "Naro", value: "naro" },
//   { name: "Palma di Montechiaro", value: "palma+di+montechiaro" },
//   { name: "Porto Empedocle", value: "porto+empedocle" },
//   { name: "Racalmuto", value: "racalmuto" },
//   { name: "Raffadali", value: "raffadali" },
//   { name: "Ravanusa", value: "ravanusa" },
//   { name: "Realmonte", value: "realmonte" },
//   { name: "Ribera", value: "ribera" },
//   { name: "Sambuca di Sicilia", value: "sambuca+di+sicilia" },
//   { name: "San Biagio Platani", value: "san+biagio+platani" },
//   { name: "San Giovanni Gemini", value: "san+giovanni+gemini" },
//   { name: "Sant'Angelo Muxaro", value: "sant%27angelo+muxaro" },
//   { name: "Santa Elisabetta", value: "	santa+elisabetta" },
//   { name: "Santa Margherita di Belice", value: "santa+margherita+di+belice" },
//   { name: "Santo Stefano Quisquina", value: "santo+stefano+quisquina" },
//   { name: "Sciacca", value: "sciacca" },
//   { name: "Siculiana", value: "siculiana" },
//   { name: "Villafranca Sicula", value: "villafranca+sicula" },
// ];

// const forecastEl = () => {
//   const todayEl = document.createElement("div");
//   const imgToday = document.createElement("img");
//   const textToday = document.createElement("p");
//   const weatherToday = document.createElement("p");
//   const tempToday = document.createElement("p");

//   todayEl.className = "first-section";

//   imgToday.src = "images/clear.png";
//   imgToday.alt = "weather of today";
//   imgToday.className = "img-forecast";

//   textToday.textContent = "Today";
//   textToday.className = "today";

//   weatherToday.textContent = "Clouds";
//   weatherToday.className = "weather-description";

//   tempToday.textContent = "16°/11°";
//   tempToday.className = "daily-temp";

//   todayEl.append(imgToday, textToday, weatherToday, tempToday);

//   return todayEl;
// };

const weatherEl = () => {
  const wrapperEl = document.createElement("div");
  const searchEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const selectEl = document.createElement("select");
  const weather = document.createElement("div");
  const imgWeather = document.createElement("img");
  const textImg = document.createElement("h3");
  const textTemp = document.createElement("h1");
  const textCity = document.createElement("h2");
  const atmosphericEl = document.createElement("div");
  const humidityEl = document.createElement("div");
  const humidityImg = document.createElement("img");
  const humidityText = document.createElement("div");
  const humidityPerc = document.createElement("p");
  const humidityName = document.createElement("p");
  const windEl = document.createElement("div");
  const windImg = document.createElement("img");
  const windText = document.createElement("div");
  const windPerc = document.createElement("p");
  const windName = document.createElement("p");
  // const containerEl = document.createElement("section");

  wrapperEl.className = "card";
  searchEl.className = "nav-bar";

  selectEl.textContent = "Seleziona un comune";
  selectEl.className = "search-box";

  imgEl.src = "image_logo/Sea salt (1).png";
  imgEl.alt = "logo dell'app";

  weather.className = "weather-card";

  imgWeather.src = "images/clouds.png";
  imgWeather.alt = "type of weather";
  imgWeather.className = "img-weather";

  textImg.className = "weather-type";

  textTemp.className = "temp";

  textCity.className = "city";

  atmosphericEl.className = "atmospheric";

  // humidy element
  humidityEl.className = "humidity-wrap";
  humidityImg.src = "images/humidity.png";
  humidityImg.alt = "humidity of the city";
  humidityImg.className = "humidity-img";
  humidityPerc.className = "humidity";
  humidityName.textContent = "Humidity";
  humidityText.className = "humidity-text";

  //wind element
  windEl.className = "wind-wrap";
  windImg.src = "images/wind.png";
  windImg.alt = "wind of the city";
  windImg.className = "wind-img";
  windPerc.className = "wind";
  windName.textContent = "Wind Speed";
  windText.className = "wind-text";

  // containerEl.className = "container";

  searchEl.append(imgEl, selectEl);
  weather.append(imgWeather, textImg, textTemp, textCity);
  humidityText.append(humidityPerc, humidityName);
  humidityEl.append(humidityImg, humidityText);
  windText.append(windPerc, windName);
  windEl.append(windImg, windText);
  atmosphericEl.append(humidityEl, windEl);
  wrapperEl.append(searchEl, weather, atmosphericEl);

  // const forecastContainer1 = forecastEl();
  // containerEl.appendChild(forecastContainer1);

  // const forecastContainer2 = forecastEl();
  // containerEl.appendChild(forecastContainer2);

  // const forecastContainer3 = forecastEl();
  // containerEl.appendChild(forecastContainer3);

  // const forecastContainer4 = forecastEl();
  // containerEl.appendChild(forecastContainer4);

  return { wrapperEl, selectEl };
};

const { wrapperEl, selectEl } = weatherEl();
document.body.append(wrapperEl);

const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.text = "Choose a city";
defaultOption.disabled = true;
defaultOption.selected = true;

selectEl.appendChild(defaultOption);

cityCoordinates.forEach((city) => {
  const optionEl = document.createElement("option");
  optionEl.value = city.value;
  optionEl.text = city.name;
  selectEl.appendChild(optionEl);
});

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const BASE_URL_2 = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "a959731e5a50375009334925528b7501";

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("change", (e) => {
  e.preventDefault();
  checkWeather(e.target.value);
  // getDailyWeather(e.target.value);
});

searchBox.addEventListener("change", async (e) => {
  e.preventDefault();
  const selectedCity = cityCoordinates.find(
    (city) => city.value === e.target.value
  );

  if (selectedCity) {
    checkWeather(selectedCity.value);
    // await getDailyWeather(selectedCity.lat, selectedCity.lon);
  }
});

async function checkWeather(city) {
  const res = await fetch(`${BASE_URL}?q=${city}&APPID=${API_KEY}`);
  let data = await res.json();

  document.querySelector(".weather-type").innerHTML = data.weather[0].main;
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(data.main.temp - 272.15) + " °C";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";

  console.log(data);

  const weatherImg = document.querySelector(".img-weather");
  const cardEl = document.querySelector(".card");

  if (data.weather[0].main === "Clouds") {
    weatherImg.src = "images/clouds.png";
    cardEl.style.background = "linear-gradient(135deg, #314a4a, #403e50)";
  } else if (data.weather[0].main === "Clear") {
    weatherImg.src = "images/clear.png";
    cardEl.style.background = "linear-gradient(135deg, #00fefe, #7366c4)";
  } else if (data.weather[0].main === "Drizzle") {
    weatherImg.src = "images/drizzle.png";
    cardEl.style.background = "linear-gradient(135deg, #4ea0a0, #393453)";
  } else if (data.weather[0].main === "Mist") {
    weatherImg.src = "images/mist.png";
    cardEl.style.background = "linear-gradient(135deg, #8aaeae, #5d5589)";
  } else if (data.weather[0].main === "Rain") {
    weatherImg.src = "images/rain.png";
    cardEl.style.background =
      "linear-gradient(135deg, #4f5a5a, rgb(93, 90, 113))";
  } else if (data.weather[0].main === "Snow") {
    weatherImg.src = "images/snow.png";
    cardEl.style.background = " linear-gradient(135deg, #d8e1e1, #c4c2ce)";
  }
}

checkWeather("agrigento");

// async function getDailyWeather(lat, lon) {
//   const cnt = 5 * 8;
//   const risposta = await fetch(
//     `${BASE_URL_2}?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${API_KEY}`
//   );
//   const forecastData = await risposta.json();

//   const dailyWeather = [];

//   for (let i = 0; i < cnt; i += 8) {
//     const forecastDay = new Date(forecastData.list[i].dt * 1000);
//     const day = forecastDay.toLocaleDateString("en-US", { weekday: "long" });
//     const weatherInfo = forecastData.list[i].weather[0];
//     const dailyTemperature = {
//       date: day,
//       temperature: forecastData.list[i].main.temp,
//       weather: forecastData.list[i].weather[0].main,
//     };
//     dailyWeather.push(dailyTemperature);
//   }

//   document.querySelector(".daily-temp").innerHTML =
//     Math.floor(dailyWeather[1].temperature - 272.15) + " °C";
//   document.querySelector(".today").innerHTML = dailyWeather[1].date;
//   document.querySelector(".weather-description").innerHTML =
//     dailyWeather[1].weather;

//   const imgForecast = document.querySelector(".img-forecast");

//   if (dailyWeather[1].weather === "Clouds") {
//     imgForecast.src = "images/clouds.png";
//   } else if (dailyWeather[1].weather === "Clear") {
//     imgForecast.src = "images/clear.png";
//   } else if (dailyWeather[1].weather === "Drizzle") {
//     imgForecast.src = "images/drizzle.png";
//   } else if (dailyWeather[1].weather === "Mist") {
//     imgForecast.src = "images/mist.png";
//   } else if (dailyWeather[1].weather === "Rain") {
//     imgForecast.src = "images/rain.png";
//   } else if (dailyWeather[1].weather === "Snow") {
//     imgForecast.src = "images/snow.png";
//   }

//   console.log(forecastData);
//   console.log(dailyWeather);
//   //   dailyWeather.forEach((day) => forecastEl(day));
// }

// getDailyWeather(37.31109, 13.576548);

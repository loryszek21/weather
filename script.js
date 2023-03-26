let weather = {
  apiKey: "618671dce49c2e4e1d1aa94ff05662bc",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&lang=PL&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, temp_min, temp_max, feels_like } = data.main;
    const { speed } = data.wind;

    console.log(
      name,
      description,
      temp,
      humidity,
      temp_min,
      temp_max,
      feels_like,
      speed,
      icon
    );
    document.querySelector(".temp").innerText = temp + "°C";
    ("&deg;");
    document.querySelector(".city").innerText = name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".speed").innerText =
      "Prędkość wiatru " + speed + " km/h";
    document.querySelector(".humidity").innerText =
      "Wilgotność " + humidity + "%";
    document.querySelector(".temp_min").innerText =
      "Temperatura minimalna " + temp_min + "°C";
    document.querySelector(".temp_max").innerText =
      "Temperatura maksymalna " + temp_max + "°C";
    document.querySelector(".feels_like").innerText =
      "Odczuwalna temperatura " + feels_like + "°C";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".type-bar").value);
  },
};
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

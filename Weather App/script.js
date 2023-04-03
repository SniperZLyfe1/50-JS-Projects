const getLocationBtn = document.querySelector(".get-location");
const searchLocation = document.querySelector(".search");
const notification = document.querySelector(".notification");
const startingScreen = document.querySelector(".starting-screen");
const weatherScreen = document.querySelector(".weather-screen");
const weatherIcon = document.querySelector("img");
const temperatureLabel = document.querySelector(".temperature");
const weatherStatusLabel = document.querySelector(".weather-status");
const weatherLocLabel = document.querySelector(".weather-location span");
const feelLikesLabel = document.querySelector(".feels-like");
const humidityLabel = document.querySelector(".humidity");
const gobackBtn = document.querySelector(".go-back");

const API_KEY = "4e237a6805bb5c6d74dcf2edffdcddcb";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(pos.coords.latitude, pos.coords.longitude);
        notification.innerHTML = "Getting Weather details...";
        notification.classList.remove("hidden", "failed");
        notification.classList.add("success");
        setTimeout(
          () =>
            getRequest(
              `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}`
            ),
          1000
        );
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          notification.innerHTML = "User denied Geolocation";
          notification.classList.remove("hidden", "success");
          notification.classList.add("failed");
          setTimeout(() => notification.classList.add("hidden"), 1000);
        }
      }
    );
  } else {
    alert("Geolocation not supported by this browser");
  }
}

getLocationBtn.addEventListener("click", () => {
  getLocation();
});

function getRequest(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.cod === "404" || data.cod === "400") {
        notification.innerHTML = "Something went wrong!";
        notification.classList.remove("hidden", "success");
        notification.classList.add("failed");
        setTimeout(() => notification.classList.add("hidden"), 1000);
        searchLocation.value = "";
        return;
      }
      searchLocation.value = "";
      startingScreen.classList.add("hidden");
      notification.classList.add("hidden");
      weatherScreen.classList.remove("hidden");
      const { humidity, feels_like, temp } = data["main"];
      let convertion = ((+temp - 32) * 5) / 9;
      const getId = data["weather"][0].id;
      const status =
        data["weather"][0].description.split(" ")[0].slice(0, 1).toUpperCase() +
        data["weather"][0].description.split(" ")[0].slice(1) +
        " " +
        data["weather"][0].description.split(" ")[1].slice(0, 1).toUpperCase() +
        data["weather"][0].description.split(" ")[1].slice(1);
      weatherLocLabel.innerHTML = `${data["name"]}, ${data["sys"].country}`;
      weatherStatusLabel.innerHTML = status;
      humidityLabel.innerHTML = Math.floor(humidity) + "%";
      feelLikesLabel.innerHTML = `${Math.floor(feels_like)}°C`;
      temperatureLabel.innerHTML = `${Math.floor(convertion)}°C`;

      if (getId == 800) {
        weatherIcon.src = `/images/clear.svg`;
      } else if (getId >= 200 && getId <= 223) {
        weatherIcon.src = `/images/storm.svg`;
      } else if (getId >= 600 && getId <= 622) {
        weatherIcon.src = `/images/snow.svg`;
      } else if (getId >= 701 && getId <= 781) {
        weatherIcon.src = `/images/haze.svg`;
      } else if (getId >= 801 && getId <= 804) {
        weatherIcon.src = `/images/cloud.svg`;
      } else if (
        (getId >= 300 && getId <= 321) ||
        (getId >= 500 && getId <= 531)
      ) {
        weatherIcon.src = `/images/rain.svg`;
      }
    });
}

searchLocation.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.value) {
    notification.innerHTML = "Getting Weather details...";
    notification.classList.remove("hidden", "failed");
    notification.classList.add("success");
    setTimeout(
      () =>
        getRequest(
          `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${API_KEY}`
        ),
      1000
    );
  }
});

gobackBtn.addEventListener("click", () => {
  weatherScreen.classList.add("hidden");
  startingScreen.classList.remove("hidden");
  searchLocation.value = "";
});

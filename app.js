const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=53ca0c26d298aa980120829328dd1c12&units=metric&q=";

const searchCity = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function weatherAPI(city) {
    const response = await fetch(apiUrl + city);
    let data = await response.json();       //Readable by browser

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Changing the weather icon
    const changeWeatherIcon = document.querySelector(".weather-icon");

    if(data.weather[0].main == "Clouds")
    {
        changeWeatherIcon.src = "images/clouds.png";
    } else if(data.weather[0].main == "Clear")
    {
        changeWeatherIcon.src = "images/clear.png";
    } else if(data.weather[0].main == "Rain")
    {
        changeWeatherIcon.src = "images/rain.png";
    } else if(data.weather[0].main == "Drizze")
    {
        changeWeatherIcon.src = "images/drizzle.png";
    } else if(data.weather[0].main == "Mist")
    {
        changeWeatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click", () => {
    weatherAPI(searchCity.value);
});


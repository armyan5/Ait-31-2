const API_KEY = '1d2ec45002958ddc80002f2f7f1c4cc7';

const input = document.getElementById('locationInput');
const button = document.getElementById('getWeatherButton');
const info = document.getElementById('WeatherContainer');



// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
//https://openweathermap.org/img/wn/04n@2x.png

button.onclick = async() => {
    const cityName = input.value.trim();

    if(cityName) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=de&units=metric`);
            const weatherInfo = await response.json();
            input.value = '';
            displayWeather(weatherInfo);
        }catch(error) {
            console.log(error);
        }
    
    }
   
};

function displayWeather(data) {
    console.log(data);

const {name,
    clouds:{all},
    sys: {country,sunrise,sunset},
    visibility,
    coord:{lon, lat},
    main: {temp, feels_like, temp_min, temp_max, pressure, humidity}, 
    weather: [{description,icon}], 
    wind: {speed}
} = data;




info.innerHTML = `
    <h2><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icon">${name} ✈,${country}</h2>
    <p> Temperature: ${temp}℃, Feels like: ${feels_like}</p>
    <p>Max Temperature: ${temp_max}℃, Min temperature: ${temp_min}℃</p>
    <p>Description: ${description},clouds:${all}%,pressure: ${pressure},humidity: ${humidity}</p>
    <p>Coord: ${lon},${lat} </p>
    <p>wind speed: ${speed}m/s</p>
    <p>wind Visibility: ${visibility/1000}km</p>
    <p>wind Sunrise: ${sunrise}, Sunset: ${sunset}</p>

    `
    
};
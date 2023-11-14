const API_KEY = '1d2ec45002958ddc80002f2f7f1c4cc7';

const input = document.getElementById('locationInput');
const button = document.getElementById('getWeatherButton');
const info = document.getElementById('WeatherContainer');



// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric

button.onclick = () => {
    const cityName = input.value.trim();

    async function fetchCity() {
        try{
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric');
            const cityName = await response.json();


        }catch (error) {

            console.log(error);
        }
        
    }

    // if(cityName) {
    //  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
    //     .then(response => response.json())
    //     .then(weather => displayWeather(weather));
    // }
    // input.value = '';
};

function displayWeather(data) {

const {name, main: {temp}, weather: [{description}], wind: {speed}} = data;

info.innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${temp}℃</p>
    <p>Description: ${description}</p>
    <p>wind speed: ${speed}m/s</p>`



};

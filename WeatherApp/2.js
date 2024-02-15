const apiKey = '600ca9e1f16e93e04e0c871d78ab49ad';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

const locationInput = document.getElementsByClassName("search-bar");
const searchButton = document.getElementsByClassName("search-button");
const locationElement = document.getElementsByClassName("city");
const temperatureElement = document.getElementsByClassName("temp");
const descriptionElement = document.getElementsByClassName("description");

searchButton.addEventListener('click',()=>{
    const location = locationInput.value;
    if(location){
        fetchWeather(location);
    }
});

function fetchWeather(location){
    const url = '${apiUrl}?q=${location}&appid=${apiKey}&units=metric';
    fetch(url)
       .then(response => response.json())
       .then(data => {
        locationElement.textContent  = data.name;
        temperatureElement.textContent = '${Math.round(data.main.temp)}°C';
        descriptionElement.textContent = data.weather[0].description;

       })
       .catch(error => {
        console.log('Error fetching weather data : ',error);
       });
}


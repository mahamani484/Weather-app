const API_KEY = `7b6046d028bb2c963ad1fd17c1675ee8`
const form=document.querySelector('form')
const weather=document.querySelector('#weather')
const details=document.querySelector('#details')
const search=document.querySelector('#search')
const getWeather = async(city) => {
    weather.innerHTML='<span class="loader"></span>'
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7b6046d028bb2c963ad1fd17c1675ee8&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return showWeather(data);
}


const showWeather =(data) =>{
    if(data.cod=="404"){
        weather.innerHTML= '<h2> City name not found. <br> Check spelling and try again </h2>'
        return;
    }
    weather.innerHTML= `
    <div class="weather" id="weather">
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="icon" alt="">
    
    <h2 class="city"> ${data.main.temp}°C <br>
     ${data.weather[0].main} </h2>
    </div>
`   
    details.innerHTML=`<div class="details">
    <p class="humidity">Humdity : ${data.main.humidity}%</p>
    <p class="windspeed">Wind Speed : ${data.wind.speed}km/h</p>
    </div>`
}

form.addEventListener("submit",
function(event){
    getWeather(search.value);
    event.preventDefault();
}
)

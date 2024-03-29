const checkWeatherBtn = document.getElementById("checkWeather");
const cityName = document.getElementById("cityName");
const celsius = document.getElementById("cel");
const description = document.getElementById("desc");
const weatherIcon=document.getElementById("weatherIcon");

checkWeatherBtn.addEventListener("click", function () {
    let userValue = document.getElementById("userValue");
    let userInput = userValue.value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&units=metric&appid=d3b48aa6d122949fdbba69fd06a99401')
        .then(res => res.json())
        .then(data => {
            
            cityName.innerText = data.name;
            celsius.innerText = data.main.temp;

            let cityWeather = data.weather[0];
            description.innerText=cityWeather.main;

            let iconCode=cityWeather.icon;
            let iconUrl='https://openweathermap.org/img/wn/'+iconCode+'@2x.png';
            weatherIcon.setAttribute('src',iconUrl);
        })
        .catch(err=>alert("Wrong city Name"))
})
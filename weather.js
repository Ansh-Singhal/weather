const apikey = "ad9ff5475285259af9d61e2b715b4c91";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    let weatherMain = data.weather[0].main;
    switch(weatherMain){
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
            case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
            case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
            case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
            case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
            case "Snow":
            weatherIcon.src = "images/snow.png";
            break;
            case "":
            weatherIcon.src = "images/clouds.png";
            break;
    }

    document.querySelector(".weather").style.display = "block";
     document.querySelector(".error").style.display = "none";
    //  console.log(data.weather[0].main);
}
}



searchBtn.addEventListener("click" , () =>{
    checkweather(searchBox.value);
});
searchBox.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        checkweather(searchBox.value);
    }
});

// checkweather();
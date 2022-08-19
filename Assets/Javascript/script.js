var city;

window.addEventListener('load', ()=> {
    let long;
    let lat;
    // Not sure if these acutally will prove useful. I am unable to find a workaround to pull local Lat Long information
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.degree');
    let locationTimezone = document.querySelector(".location-timezone");

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => { 
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Sacramento&units=imperial&limit=10&appid=5b2e2bc67a6c73ff4f0998fcebd047ad";
            // for 'queryURL' Add " &limit=10 " in between Sacramento and &appid
            // This is to limit the amount of times the API is fetched. Openweathermap.org allows for 1k total per day,
            // so to no go above this limit, adding a 'limiter' will reduce that chance.
            // const APIkey = `5b2e2bc67a6c73ff4f0998fcebd047ad`;
            
            // This fetch command pulls from the queryURL for the weahter API
        fetch(queryURL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temp, weather} = data.main;
                // Set DOM elements pulled from the API
                temperatureDegree.textContent = temp;
                temperatureDescription.textContent = feels_like;
                locationTimezone.textContent = data.main;
            });
        });
    }
});
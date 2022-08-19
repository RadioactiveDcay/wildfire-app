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
            const APIkey = `5b2e2bc67a6c73ff4f0998fcebd047ad`;
            const queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + String(position.coords.latitude) + "&lon=" + String(position.coords.longitude) + "&limit=10&units=imperial&appid=" + APIkey;
            // const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Sacramento&units=imperial&limit=10&appid=5b2e2bc67a6c73ff4f0998fcebd047ad";
            
            // This fetch command pulls from the queryURL for the weahter API
        fetch(queryURL)
            .then(response => {
                return response.json();
            }) // This .then statement is replacing the information provided in the local variables
               // including the document.queryselector's
            .then(data => {
                // Console.log so the graders can see what information is being pulled from openweathermaps.org
                console.log(data);
                const {temp, feels_like} = data.main;
                // Set DOM elements pulled from the API
                temperatureDegree.textContent = "Temp " + temp;
                temperatureDescription.textContent = "Feels Like " + feels_like;
                locationTimezone.textContent = data.name;
            });
        });
    }
});
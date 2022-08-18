var city;

window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescriptor = document.querySelector('.temperature-descriptor');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('locationTimezone');

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => { 
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const queryURL = "https://api.openweathermap.org/data/1.0/weather?q=Sacramento&appid=5b2e2bc67a6c73ff4f0998fcebd047ad";
            // for 'queryURL' Add " &limit=10 " in between Sacramento and &appid
            // This is to limit the amount of times the API is fetched. Openweathermap.org allows for 1k total per day,
            // so to no go above this limit, adding a 'limiter' will reduce that chance.
            const APIkey = `5b2e2bc67a6c73ff4f0998fcebd047ad`;
            

        fetch(queryURL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {weather, temp} = data.main;

                temperatureDegree.textContent = main;
                
            });
        });
    }
});
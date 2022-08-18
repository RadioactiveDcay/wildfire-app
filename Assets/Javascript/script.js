var city;

window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescriptor = document.querySelector('.temperature-descriptor');
    let temperatureDegree = document.querySelector('.temperature-degree');

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude; 
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Sacramento&appid=5b2e2bc67a6c73ff4f0998fcebd047ad";
            const APIkey = `5b2e2bc67a6c73ff4f0998fcebd047ad`;
            

        fetch(queryURL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temperature, summary} = data.currently;
                
            });
        });
    }
});
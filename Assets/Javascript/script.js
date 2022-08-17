window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescriptor = document.querySelector('.temperature-descriptor');
    let temperatureDegree = document.querySelector('.temperature-degree');

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude; 
            const api = `https://home.openweathermap.org/api_keys/5b2e2bc67a6c73ff4f0998fcebd047ad/${lat},${long}`;
            const proxy = "https://cors-anywhere.herokuapp.com/"
        fetch(api)
            .then(data =>{
                return response.json();
            })
            .then(response => {
                console.log(data);
                const {temperature, summary} = data.currently;
                
            });
        });
    }
});
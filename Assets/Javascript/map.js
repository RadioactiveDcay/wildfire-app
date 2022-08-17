
function initMap(){
    //Getting the NASA api
    fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
    .then(res => res.json())
    .then(data => {
        //Creating the map
        var map = new google.maps.Map(document.getElementById("fireMap"), {
            zoom: 6,
            center: { lat: 38.782449813306606, lng: -121.22187219433563 },
            mapTypeId: 'terrain',
        });
        //Adding the fire locations to map
        var eventList = data.events;
        eventList.forEach(element => {
            //Checking if event is a wildfire
            if(element.categories[0].id === 8){
                var marker = new google.maps.Marker({
                    position: {lat: element.geometries[0].coordinates[1], lng: element.geometries[0].coordinates[0]},
                    map: map
                })
            }
        });

        
    });
}
 
window.initMap = initMap;
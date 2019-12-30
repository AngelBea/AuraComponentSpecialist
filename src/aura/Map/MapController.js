({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    } ,
    onPlotMapMarker : function(component, event, helper){
        try{
            var map = component.find("map").getElement();
            var event = event.getParams();
            var lMap = L.map(map).setView([event.lat, event.long], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
                maxZoom : 17,
                attribution : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(lMap);

            L.marker([event.lat, event.long]).addTo(lMap);
            
            component.set('v.location', {
                latitude: event.lat,
                longitude : event.long
            })            
        }catch(error){
            console.log(error);
        }
    }
})
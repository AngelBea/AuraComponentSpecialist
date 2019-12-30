({
    myAction : function(component, event, helper) {

    },
    onBoatClick: function(component, event, helper){
        try{

            var boatClicked = component.getEvent('boatSelect');
            var boatSelected = $A.get("e.c:BoatSelected");
            var setLocation = $A.get("e.c:PlotMapMarker");
            console.log("SetLocation --> "+setLocation);
            var boat = component.get('v.boat');
            console.log("ABG !! On Boat Click Boat --> "+JSON.stringify(boat));
            boatClicked.setParams({
                "boatId" : boat.Id
            });
            
            boatSelected.setParams({
                "boat" : boat
            });
            
            console.log("ABG !! BoatSelectedEvent -->"+boatSelected);
            setLocation.setParams({
                "sObjectId" : boat.Id,
                "lat" : boat.Geolocation__Latitude__s,
                "long" : boat.Geolocation__Longitude__s,
                "label" : boat.Name
            });
            boatClicked.fire();
            boatSelected.fire();
            setLocation.fire();
        }catch(error){
            console.log(error);
        }
    }
    
})
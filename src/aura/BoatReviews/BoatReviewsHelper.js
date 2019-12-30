({
    onInit : function(component, event, helper) {
        var action = component.get('c.getAll');
        var boat = component.get('v.boat');
        console.log('Reviews Boat --> '+JSON.stringify(boat.Id));
        action.setParams({
            boatId : boat.Id
        });

        action.setCallback(this, function(response){
           var state = response.getState();
           switch (state) {
               case "SUCCESS":
                   var boatReviews = component.set('v.boatReviews', response.getReturnValue());
                   break;
               case "ERROR":
                   console.log('Error');
                   break;               
           }
        });

        $A.enqueueAction(action);
    }
})
({
    retrieveBoatsOptions : function(component) {
        var action = component.get("c.getBoatOptions");

        action.setCallback(this, function(response){
            var state = response.getState();
            console.log("ABG !! StateSearchForm -->"+ state);
            if(state === "SUCCESS"){
                console.log("ABG !! ReturnVAlueSearchForm --> "+response.getReturnValue());
                component.set("v.boatOptions", JSON.parse(response.getReturnValue()));
                console.log(component.get("v.boatOptions") != null);
            }
        })

        $A.enqueueAction(action);
    }
})
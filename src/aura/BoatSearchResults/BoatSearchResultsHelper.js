({
    searchForBoats : function(component) {
        var action = component.get("c.getBoats");
        action.setParams({
            "boatTypeId" :""
        });
        action.setCallback(this, function(response){
            var state = response.getState();
           if(state === 'SUCCESS'){
                component.set('v.boatList', response.getReturnValue());
           }else if(state === 'ERROR'){
                console.log("ABG !! Error --> "+response.getError());
           }
        });

        $A.enqueueAction(action);        
    },
    onSearch : function(component, event){
        var action = component.get("c.getBoats");        
        var parameters = event.getParams();        

        action.setParams({
            "boatTypeId" : parameters.arguments.boatTypeId
        });

        action.setCallback(this, function(response){
            var state = response.getState();            
           if(state === 'SUCCESS'){
                // component.set('v.boatList', JSON.parse(response.getReturnValue()));
                component.set('v.boatList', response.getReturnValue());
           }else if(state === 'ERROR'){
                console.log("ABG !! Error --> "+response.getError());
           }
        });

        $A.enqueueAction(action);  
    } 
})
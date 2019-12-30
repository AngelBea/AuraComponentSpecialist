({
    doInit : function(component, event, helper) {
        helper.retrieveBoatsOptions(component);
        var canCreate = $A.get("event.force:createRecord");        
        if(canCreate){
            component.set("v.canCreate", true);
        }else return component.set("v.canCreate", false);
    },
    onFormSubmit : function(component, event, helper){
        try {
            var selection = component.find("selection").get("v.value");             
            var onFormSubmit = component.getEvent("formsubmit");
            onFormSubmit.setParams({
                "formData" : {"boatTypeId": selection}
            });
            onFormSubmit.fire();            
        } catch (error) {
            console.log("ABG !! OnFormSubmitError --> "+error);
        }
    },
    createNewBoat : function(component, event, helper){
        var createBoat = $A.get("event.force:createRecord");
        var selection = component.find("selection").get("v.value");         
        createBoat.setParams({
            "entityApiName" : "Boat__c",
            "defaultFieldValues" : {
                'BoatType__c': selection ? selection : null                
            }
        });

        createBoat.fire();
    }

        
})
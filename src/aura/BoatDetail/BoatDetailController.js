({
    doInit : function(component, event, helper) {
        var event = $A.get("e.force:navigateToSObject");
        var recordId = component.get("v.boat").Id;

        console.log("ABG !! Full Details Id --> "+recordId);

        if(event){
            component.set("v.fullDetailsEnabled", true);            
        }else{
            component.set("v.fullDetailsEnabled", false);            
        }
    },
    onFullDetails : function(component, event, helper) {
        var event = $A.get("e.force:navigateToSObject");
        var recordId = component.get("v.boat").Id;

        if(event){
            event.setParams({
                "recordId" : recordId,
                "slideDevName" : "Detail"
            });
            event.fire();
        }else{
            console.log("The event is not accessible in the context");
        }
    }
})
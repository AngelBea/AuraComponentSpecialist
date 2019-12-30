({
    doInit : function(component, event, helper) {
        helper.onInit(component, event, helper);
    },
    onUserInfoClick : function(component, event, helper){
        try {
            var srcEvtId = event.currentTarget.dataset.userid
            console.log('Event Source Info Click --> '+srcEvtId);            

            var navEvt = $A.get("e.force:navigateToSObject");
            navEvt.setParams({
                "recordId" : srcEvtId,
                "slideDevName" : "details"
            });            
            navEvt.fire();
        } catch (error) {
            console.error('Error Info Click'+error);
        }
    }
})
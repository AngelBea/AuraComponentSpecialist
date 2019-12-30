({
    onInit : function(component, event, helper) {
        var service = component.find("service");
        service.getNewRecord(
            "BoatReview__c",
            null,
            false,
            $A.getCallback(function(params) {
                var rec = component.get("v.boatReview");
                var error = component.get("v.recordError");
                if(!error || rec){
                    rec.Boat__c = component.get("v.boat").Id;
                    component.set('v.boatReview', rec);
                    console.log("Everything ok");
                }else{
                    console.log("Callback error --> "+error);
                }
                console.log("ABG !! boatReview --> "+JSON.stringify(rec) );
            })
        )
    }
})
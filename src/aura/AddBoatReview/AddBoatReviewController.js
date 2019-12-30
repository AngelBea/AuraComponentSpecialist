({
    doInit : function(component, event, helper) {
        helper.onInit(component, event, helper);
    },
    onSave : function(component, event, helper) {
        var service = component.find("service");
        var reviewAdded = component.getEvent("BoatReviewAdded");
        try{
            service.saveRecord(function(result) {                
                if(result.state === "SUCCESS" || result.state === "DRAFT"){
                    reviewAdded.fire();
                    helper.onInit(component, event, helper);
                }
            });
            
        }catch(error){
            console.error("ABG !! Error -->"+error);
        }finally{
            var showToast = $A.get("e.force:showToast");
            if(showToast){
                showToast.setParams({
                        "title": "Review submitted!",
                        "message":"Your review has been submitted succesfully. /n Thanks for your opinion",
                        "type" :  "success"
                    })
                showToast.fire();
            }else{
                alert("Your review has been submitted succesfully. Thanks for your opinion");
            }
        }
    },
    onRecordUpdated : function(component, event, helper) {
        var showToast = $A.get("e.force:showToast");
        var recordError;
        
        if(showToast){
            showToast.setParams({
                    "title": "Your opinion is important",
                    "message":"We really want to hear what you have to say about this boat!",
                    "type" :  "info"
                })
            showToast.fire();
        }else{
            alert("We really want to hear what you have to say about this boat!");
        }
    }
})
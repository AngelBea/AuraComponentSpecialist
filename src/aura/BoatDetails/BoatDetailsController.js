({
    myAction : function(component, event, helper) {

    },
    onRecordUpdated : function(component, event, helper) {
        try {
            var boatReviews = component.find("boatReviews");
            if(boatReviews){
               boatReviews.refresh(); 
            }
        } catch (error) {
            console.error('Error OnBoatSelectReviews '+error)
        }
    },
    onBoatSelected : function (component, event, helper) {        
        var params = event.getParams();
        console.log("ABG !! OnBoatSelectedParams --> "+JSON.stringify(params));
        console.log("ABG !! OnBoatSelectedId --> "+params.boat.Id);
        var dataService = component.find("service")
        component.set("v.id", params.boat.Id);
        /* dataService.getNewRecord(
            "Boat__c",
            null,
            false,
            $A.getCallback(function(){
                if(component.get("v.boat") === null){
                    console.log("ABG !! New Record isn't loaded");
                }else{
                    console.log("ABG !! New Record is loaded");
                    console.log("ABG !! Boat before set "+JSON.stringify(component.get("v.boat")));
                }
            })
        ) */
        dataService.reloadRecord();        
        
        console.log("ABG !! Id before set "+component.get("v.id"));
        
    },
    onBoatReviewAdded : function(component, event, helper) {
        try {
            var boatReviews = component.find("boatReviews");
            if(boatReviews){
               boatReviews.refresh(); 
            }
        } catch (error) {
            console.error('Error OnBoatSelectReviews '+error)
        }
        component.find("detailsTab").set("v.selectedTabId", "boatreviewtab");
    }
})
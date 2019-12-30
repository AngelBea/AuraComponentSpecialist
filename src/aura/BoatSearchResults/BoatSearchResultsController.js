({
    doInit : function(component, event, helper) {
        helper.searchForBoats(component);
    },
    doSearch: function(component, event, helper){        
        helper.onSearch(component, event);
    },
    onBoatSelect : function(component, event, helper){
        var params = event.getParams();        
        component.set("v.selectedBoatId", params.boatId);
        component.get("v.selectedBoatId");
    }
})
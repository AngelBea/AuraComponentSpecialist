({
    onFormSubmit : function(component, event, helper){
        var boatSearchResult = component.find('boatSearchResult');        
        var formData = event.getParam("formData");        
        boatSearchResult.search(formData.boatTypeId);
    }
})
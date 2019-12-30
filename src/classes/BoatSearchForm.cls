public with sharing class BoatSearchForm {
    @AuraEnabled
    public static String getBoatOptions(){
        List<String> strings = new List<String>();
        for (SObjectField field : Schema.SObjectType.BoatType__c.fields.getMap().values()) {
            strings.add(String.valueOf(field));
        }        
        System.debug('ABG !! Fields -->'+ strings);
        return  JSON.serialize(Database.query('SELECT '+ String.join(strings, ', ')+' FROM BoatType__c'));
    }
}
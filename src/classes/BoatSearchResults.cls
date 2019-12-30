public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        System.debug('ABG !! boatTypeId -->'+ boatTypeId);
        System.debug('ABG !! isEmptyString -->'+ String.isEmpty(boatTypeId));
        List<String> strings = new List<String>();
        /* for (SObjectField field : Schema.SObjectType.Boat__c.fields.getMap().values()) {
            if(field.getDescribe().isAccessible()){
                strings.add(String.valueOf(field));
                System.debug('ABG !! Strings -->'+ String.valueOf(field));
            }
            System.debug('ABG !! Strings -->'+ String.valueOf(field));
        } */
        strings.add('Contact__r.Name'); 
        strings.add('Name');
        strings.add('Picture__c');
        strings.add('Id');
        strings.add('Geolocation__Latitude__s');        
        strings.add('Geolocation__Longitude__s');        
        //return String.isEmpty(boatTypeId) ? JSON.serialize(Database.query('SELECT '+ String.join(strings, ', ')+' FROM Boat__c')) : JSON.serialize(Database.query('SELECT '+ String.join(strings, ',')+' FROM Boat__c WHERE BoatType__c =: boatTypeId'));
        return String.isEmpty(boatTypeId) ? Database.query('SELECT '+ String.join(strings, ', ')+' FROM Boat__c') : Database.query('SELECT '+ String.join(strings, ',')+' FROM Boat__c WHERE BoatType__c =: boatTypeId');
    }
} 
public with sharing class BoatReviews {
    @AuraEnabled
    public static List<BoatReview__c> getAll(String boatId){
        List<String> strings = new List<String>();
        /*for(SObjectField field : Schema.SObjectType.BoatReview__c.fields.getMap().values()){
            if(field.getDescribe().isAccessible()){
                strings.add(String.valueOf(field));
            }
        }*/

        strings.add('Id');
        strings.add('Name');
        strings.add('Comment__c');
        strings.add('Rating__c');
        strings.add('LastModifiedDate');
        strings.add('CreatedDate');
        strings.add('CreatedBy.Name');
        strings.add('CreatedBy.Id');
        strings.add('CreatedBy.SmallPhotoUrl');
        strings.add('CreatedBy.CompanyName');
        
        return Database.query('SELECT '+ String.join(strings, ',')+' FROM BoatReview__c WHERE Boat__c =: boatId');
    }
}
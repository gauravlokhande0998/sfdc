
/**
 * @description Sfdc_EmailServices
 */
global class Sfdc_EmailServices implements Database.Batchable<sObject> {
    /**
    * @description start
    * @param bc
    * @return Database.QueryLocator
    */
    global Database.QueryLocator start(Database.BatchableContext bc){
        String query = 'SELECT Sender_Name__c, Phone__c, Email__c, Message__c FROM Email_Response__c';
        return Database.getQueryLocator(query);
    }
    /**
    * @description start
    * @param bc
    * @param erList
    */
    global void execute(Database.BatchableContext bc, List<Email_Response__c> erList){
        List<Messaging.SingleEmailMessage> mailList = new List<Messaging.SingleEmailMessage>();
        List<User> userList = [SELECT Id, Email from User where Email = 'salesforcepantherdev@gmail.com'];
        if(userList.size() > 0){
            String subject = '';
            for(Email_Response__c erRecord : erList){
                subject = 'Response from ' + erRecord.Sender_Name__c + ' for "Moraya Washing Center"';
                String body = 'Hello Vaibhav,<br/><br/>'
                            +'Below are the response details : <br/><br/>' 
                            +'<b>Name : </b>' + erRecord.Sender_Name__c +'<br/>' 
                            +'<b>Phone : </b>' + erRecord.Phone__c +'<br/>'
                            +'<b>Email : </b>' + erRecord.Email__c +'<br/>' 
                            +'<b>Message : </b>' + erRecord.Message__c +'<br/>' ;
                Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
                mail.setTargetObjectId(userList[0].Id);
                mail.setSubject(subject);
                mail.setHtmlBody(body);
                mail.setSaveAsActivity(false);
                mailList.add(mail);
            }
            Messaging.sendEmail(mailList);
        }
        DELETE erList;
    }
    /**
    * @description start
    * @param bc
    */
    global void finish(Database.BatchableContext bc) {
        //finish context
    }
}

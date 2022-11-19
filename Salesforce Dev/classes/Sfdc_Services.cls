/**
 * @description Sfdc_Services
 */
public class Sfdc_Services {
    /**
    * @description getServiceResponse
    * @return response
    * @param userResponseString
    */
    @AuraEnabled
    public static string getServiceResponse(String userResponseString) {
        List<String> userResponse = (List<String>)System.JSON.deserialize(userResponseString, List<String>.class);
        Email_Response__c emailRecord = new Email_Response__c();
        String response = 'Success';
        emailRecord.Sender_Name__c = userResponse[0];
        emailRecord.Phone__c = userResponse[1];
        emailRecord.Email__c = userResponse[2];
        emailRecord.Message__c = userResponse[3];
        emailRecord.Session_Id__c = userResponse[4];
        try {
            INSERT emailRecord;
        } catch (Exception e) {
            response = e.getMessage();
        }
        return response;
    }
    /**
    * @description isSameSession
    * @return response
    * @param sessionId
    */
    @AuraEnabled
    public static String isSameSession(String sessionId) {
        String response = 'false';
        try {
            List<Email_Response__c> emailList = [SELECT Session_Id__c from Email_Response__c WHERE Session_Id__c =: sessionId];
            if(emailList.size() > 0){
                response = 'true';
            }
        } catch (Exception e) {
            System.debug(e.getMessage());
        }
        return response;
    }
}
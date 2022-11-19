/**
 * @description Sfdc_ScheduleEmailServices
 */
global class Sfdc_ScheduleEmailServices implements Schedulable{
    /**
    * @description Sfdc_ScheduleEmailServices
    * @param sc
    */
    global void execute(SchedulableContext sc){
        Sfdc_EmailServices emailService = new Sfdc_EmailServices();
        database.executeBatch(emailService);
    }
}
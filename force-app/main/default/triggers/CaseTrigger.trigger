trigger CaseTrigger on Case (after insert, before update) {
    if(trigger.isafter && trigger.isinsert && !Test.isRunningTest()){
        For(Case str: [Select CaseNumber From Case where ID IN :Trigger.New]){
             CaseTriggerHandler.postValue(str.CaseNumber);
        }
           //CaseTriggerHandler.createContact(Trigger.new);
        	//CaseTriggerHandler.updateConAccount(Trigger.new);
    }
    
    if(trigger.isupdate && trigger.isbefore ){
        CaseTriggerHandler.checkResolved(Trigger.new);
        CaseTriggerHandler.checkStat(Trigger.new);
    }
    //if(trigger.isinsert && trigger.isafter){
      //  CaseTriggerHandler.sendEmailToCustomer(Trigger.new);
    //}
}
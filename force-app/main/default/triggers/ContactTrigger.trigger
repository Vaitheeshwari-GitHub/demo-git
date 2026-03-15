trigger ContactTrigger on Contact (after insert, after update, after delete, before delete, before insert) {
   /* if(Trigger.isdelete && Trigger.isbefore){
            //ContactTriggerHandler.preventContactDeletion(Trigger.old);
    }
    //if(Trigger.isbefore){
        //if(Trigger.isInsert || Trigger.isDelete || Trigger.isUpdate){
               // ContactTriggerHandler.updateNoOfContacts(Trigger.new);
        //}
   // }
    if(trigger.isafter && trigger.isinsert){
        //ContactTriggerHandler.createConRelRec(Trigger.new);
        //ContactTriggerHandler.createAccount(Trigger.new);
    }
    if(trigger.isafter && trigger.isdelete){
        //ContactTriggerHandler.deleteRelated(Trigger.old);
    }
    //ContactTriggerHandler.updateNoOfContacts(Trigger.new, Trigger.old);*/
}
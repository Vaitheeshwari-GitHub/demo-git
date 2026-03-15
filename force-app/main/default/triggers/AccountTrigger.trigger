/*trigger AccountTrigger on Account (before insert) {
    //Trigger.new- List<Account>
    System.debug('Trigger.new---'+Trigger.new);
   
    for(Account acc: Trigger.new){
        if(acc.Industry != Null){
        acc.Name = acc.Name+ '-'+ acc.Industry;
    }
        //if(acc.Industry == Null){
        //acc.addError('Industry does not have any value');
    //}
        if(acc.Industry == 'Finance'){
            acc.Rating = 'Hot';
        } 
        else if(acc.Industry == 'Electronics'){
            acc.Rating = 'Warm';
        } 
        else if(acc.Industry == 'Energy'){
            acc.Rating = 'Cold';
        } 
    }
    
}*/

/*trigger AccountTrigger on Account (before insert,before update, before delete, after insert, after update){
    System.debug('Trigger.new'+Trigger.new);
    System.debug('Trigger.new'+Trigger.new);
    if(trigger.isbefore){
        System.debug('in isbefore');
        if(trigger.isinsert){
            system.debug('in isInsert');
        }
        if(trigger.isUpdate){
            system.debug('in isUpdate');
        }
        if(trigger.isDelete){
            system.debug('in isDelete');
        }
    }
    if(trigger.isAfter){
        System.debug('in isAfter');
        if(trigger.isinsert){
            system.debug('in isInsert');
        }
        if(trigger.isUpdate){
            system.debug('in isUpdate');
        }
        if(trigger.isDelete){
            system.debug('in isDelete');
        }
    }
    
}*/

/*trigger AccountTrigger on Account (Before update, after update){
    if(trigger.isupdate && trigger.isbefore){
        for(Account acc:Trigger.new){
            If(acc.Rating== 'cold' && Trigger.oldMap.get(acc.Id).Rating == 'Warm'){
                acc.Name = acc.Name+'-'+acc.Rating;
            }
        }
    }
}*/
/*trigger AccountTrigger on Account(before insert,before delete){
    If(Trigger.isbefore && Trigger.isdelete){
        for(Account acc:Trigger.old){
            if(acc.Rating == 'Hot'){
                acc.addError('You should not delete the record');
            }
        }
    }*/
   //System.debug(Trigger.new.size());
   /* if(trigger.isbefore && trigger.isinsert){
        AccountHandlerClass.myMethod(Trigger.new, Trigger.oldMap);
    }
}*/

trigger AccountTrigger on Account(before delete,after insert,before insert, after update){
    /*if(trigger.isbefore && trigger.isDelete ){
        //AccountHandlerClass.preventDeletion(Trigger.old);
        AccountHandlerClass.preventDeletionIfContactExists(Trigger.old);
        AccountHandlerClass.showError(Trigger.old);
    }
    if(trigger.isafter && trigger.isinsert){
        AccountHandlerClass.createContact(Trigger.new);
    }
    if(trigger.isbefore && (trigger.isupdate || trigger.isinsert)){
        AccountHandlerClass.updateRating(Trigger.new);
        AccountHandlerClass.addDescription(Trigger.new);
        //AccountHandlerClass.updateDescription(Trigger.new);
    }
    if( trigger.isbefore && trigger.isupdate){
        AccountHandlerClass.updateDescription(Trigger.new, Trigger.oldMap);
        AccountHandlerClass.updateMath(Trigger.new, Trigger.oldMap);
        AccountHandlerClass.createOpp(Trigger.new, Trigger.oldMap);
        AccountHandlerClass.afterupdate(Trigger.new);
        AccountHandlerClass.updateBilling(Trigger.new, Trigger.oldMap);
    }
    if(trigger.isafter && trigger.isupdate){
       // AccountHandlerClass.sendEmail(Trigger.new);
    }*/
}
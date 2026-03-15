trigger AccountHandlerTrigger on Account (after insert) {
    if(trigger.isinsert && trigger.isafter){
        AccountHandler.updateContact(Trigger.new);
        AnimalsCallouts.makePostCallout();
    }
}
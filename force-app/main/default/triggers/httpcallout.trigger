trigger httpcallout on Case (after insert) {
    if(trigger.isafter && trigger.isinsert){
        //httpcalloutforsite.makeCallout();
        AnimalsCallouts.makeGetCallout();
    }
}
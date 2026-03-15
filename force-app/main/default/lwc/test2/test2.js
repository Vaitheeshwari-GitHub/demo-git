import { LightningElement, track, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import { publish, MessageContext } from 'lightning/messageService';
//import msgchannel from '@salesforce/messageChannel/msgchannel__c';


export default class Test2 extends LightningElement {
   /* @wire(MessageContext)
    messageContext;

    @track filterValue;

    message = 'Updated count will appear here!';
    count = 0;

    increaseCount() {
        this.dispatchEvent(new CustomEvent('increasecount', {
            detail: {
                message: 'Increased count to ' + (++this.count)
            },
            bubbles : true
        }));
        const payload = { filterKey : this.count };
        publish(this.messageContext, msgchannel, payload);
    }
    */

    
}
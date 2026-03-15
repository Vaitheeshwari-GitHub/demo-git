import { LightningElement,api,track, wire } from 'lwc';
//import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import {subscribe,unsubscribe,MessageContext} from 'lightning/messageService';
//import msgchannel from '@salesforce/messageChannel/msgchannel__c';


export default class Test1 extends LightningElement {
    subscription = null;

   /* @wire(MessageContext)
    messageContext;
    @track count;
    

    connectedCallback(){
        //subscribing to the Lightning Message Service Channel
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                msgchannel,
                (message) => this.handleFilterKeySubmit(message)
            );
        }
        this.loadRelatedContacts("");
    }
    disconnectedCallback() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
    loadRelatedContacts(filterKey){
        increaseCount(filterKey)
        .then(results=>{
            this.count = results;
        })
        .catch(error=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });
    }
    handleFilterKeySubmit(message){
        const filterKey = message.filterKey;
        this.loadRelatedContacts(filterKey);
    } */


}
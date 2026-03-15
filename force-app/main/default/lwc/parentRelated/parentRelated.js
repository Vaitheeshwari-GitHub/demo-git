import { LightningElement,api,track, wire } from 'lwc';
import getRelatedContactsByFilter from '@salesforce/apex/ContactController.getRelatedContactsByFilter';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// Import message service features required for subscribing and the message channel
import {subscribe,unsubscribe,MessageContext} from 'lightning/messageService';
import msgchannel from '@salesforce/messageChannel/msgchannel__c';

const COLUMNS = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' }
];

export default class ParentRelated extends LightningElement {
    subscription = null;

    @wire(MessageContext)
    messageContext;

    @api recordId;//Inherits Account Record Id from Account Record Page

    @track columns = COLUMNS;
    @track data;


    //Lifecycle hook which fires when a component is inserted into the DOM
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
    
    //Lifecycle hook which fires when a component is removed from the DOM
    disconnectedCallback() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    loadRelatedContacts(filterKey){
        getRelatedContactsByFilter({accountId : this.recordId, key : filterKey})
        .then(results=>{
            this.data=results;
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
    }
}
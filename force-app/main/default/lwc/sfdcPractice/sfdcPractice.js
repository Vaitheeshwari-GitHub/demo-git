import { LightningElement,wire,api } from 'lwc';
import fetchAccounts from '@salesforce/apex/fetchAccounts.fetchAccounts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Contact.Name';

const  columns=[
    {label:'Id', fieldName:'Id'},
    {label:'Name', fieldName:'Name'},
    {label:'Industry', fieldName:'Industry',type: 'text'},
    {label:'Rating', fieldName:'Rating',type: 'text' }
];

export default class SfdcPractice extends LightningElement {
    nameField = NAME_FIELD;

    @api recordId;
    @api objectApiName;

    str="";
    accounts;
    columns = columns;
    loaded = false;
   // @wire(fetchAccounts,{str: $str}) accts;
    copySearchText(event){
        this.str = event.detail.value;
        console.log('name');
    }
    seachName(event){
        fetchAccounts({str: this.str})
            .then((data) =>{
                this.loaded = true;
                this.accounts = data;
                this.error = undefined;
                const event = new ShowToastEvent ({
                    title :'Retrieved the records to display!',
                    Message : 'Retrieved the records',
                    variant :'Success'
                    
                });
                this.dispatchEvent(event);
                this.loaded=!this.loaded;
                
                console.log('print acc');
            })
            .catch((error) =>{
                this.error = error;
                this.accounts = undefined;
                const event = new ShowToastEvent ({
                    title :'Warning',
                    variant :'Warning',
                    Message : 'error occurred while retriving records'
                });
                this.dispatchEvent(event);
                console.log('print erroe');
            })
    }
    
}
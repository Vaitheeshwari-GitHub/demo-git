import Industry from '@salesforce/schema/Account.Industry';
import Name from '@salesforce/schema/Account.Name';
import Phone from '@salesforce/schema/Account.Phone';
import AccountId from '@salesforce/schema/Case.AccountId';
import Email from '@salesforce/schema/Contact.Email';
import Title from '@salesforce/schema/Contact.Title';
import { LightningElement,api } from 'lwc'; 
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountForm extends LightningElement {
    NameField=Name;
    PhoneField=Phone;
    IndustryField=Industry;
    @api recordId;
    @api objectApiName; 
    fields = [AccountId, Name, Title, Phone, Email,Industry]; 
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}
import { LightningElement, api } from 'lwc';
import sendEmail from '@salesforce/apex/createAccount.sendMail';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import LastName from '@salesforce/schema/Contact.LastName';
import Phone from '@salesforce/schema/Contact.Phone';
import Email from '@salesforce/schema/Contact.Email';

export default class LwcTasks extends LightningElement {
    @api recordId;
    @api objectApiName;
    NameField=LastName;
    PhoneField=Phone;
    EmailField=Email;
    fields=[LastName,Phone,Email];
    Name;
    res;
    input1;
    input2;
    showWelcome=false;
    Email;
    copyName(event){
        this.Name=event.detail.value;
    }
    copyInput1(event){
        this.input1=event.target.value;
    }
    copyInput2(event){
        this.input2=event.target.value;
    }
    welcomeMethod(event){
        this.showWelcome=true;
    }
    calculateInputs(event){
        if(event.target.name=== "add"){
            this.res=Number(this.input1) + Number(this.input2);
        }
        if(event.target.name=== "sub"){
            this.res = this.input1 - this.input2;
        }
        if(event.target.name=== "mul"){
            this.res = this.input1 * this.input2;
        }
    }
    copyEmail(event){
        this.Email = event.detail.value;
    }
    sendEmail(event){
        sendEmail({Email :this.Email})
        .then(result => {
            this.message = result;
            this.error = undefined;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account created',
                    variant: 'success',
                }),
            );
        })
        .catch(error => {
            this.message = undefined;
            this.error = error;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error sending email',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
            console.log("error", JSON.stringify(this.error));
        });
    }
    
}
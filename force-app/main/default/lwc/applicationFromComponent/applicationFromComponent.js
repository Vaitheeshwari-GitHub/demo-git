import { LightningElement,track } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import createAccountRec from '@salesforce/apex/createAccount.createAccountIns';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ApplicationFromComponent extends LightningElement {
    toggle= true;
    loading = false;
    @track Name = NAME_FIELD;
    @track Phone = PHONE_FIELD;
    rec = {
        Name : this.Name,
        Phone : this.Phone,
    }
    handleToggle(event){
        this.toggle = event.target.checked;

    }
    
    copyName(event){
        this.rec.Name = event.target.value;
        console.log("name1", this.rec.Name);
    }
    copyPhone(event){
        this.rec.Phone = event.target.value;
        console.log("Phone", this.rec.Phone);
    }
    
    
    handleClick() {
        createAccountRec({ acc : this.rec })
            .then(result => {
                this.message = result;
                this.error = undefined;
                if(this.message !== undefined) {
                    this.rec.Name = '';
                    
                    this.rec.Phone = '';
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Account created',
                            variant: 'success',
                        }),
                    );
                }
                
                console.log(JSON.stringify(result));
                console.log("result", this.message);
            })
            .catch(error => {
                this.message = undefined;
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
                console.log("error", JSON.stringify(this.error));
            });
    }
}

   /* handleReset(event){
        this.template.querySelectorAll('lightning-input').forEach(element => {
            if(element.type === 'checkbox' || element.type === 'checkbox-button'){
              element.checked = false;
            }else if(element.type === 'toggle'){
                element.checked = false;
            }else {
              element.value = null;
            }      
          });
        this.template.querySelectorAll('lightning-input-address').forEach(element =>{
            element.value = null;
        })
    }
    value;
    get options() {
        return [
            { label: 'Female', value: 'female' },
            { label: 'Male', value: 'male' },
            { label:'Other', value: 'other'}
        ];
    }
    handleComboBox(event){
        this.value=event.detail.value;
    }
    SameAddress;
    handleAddress(event){
        this.SameAddress= event.detail.value
    }
    copyAddress(event){
        this.SameAddress=event.detail.value;
    }*/
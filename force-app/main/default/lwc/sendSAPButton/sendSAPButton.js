import { LightningElement,api } from 'lwc';
import sendDetails from '@salesforce/apex/SendToSAP.sendDetails';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class SendSAPButton extends LightningElement {
    @api recordId;
    handleClick(event){
        console.log(this.recordId);
        sendDetails({recordId : this.recordId})
        //console.log(this.recordId);
            .then((result) => {
                if(result === true){
                    const eve = new ShowToastEvent({
                        title: 'Success',
                        message: 'Data sent successfully!',    
                    }); 
                    this.dispatchEvent(eve);
                }
                else{
                    const eve = new ShowToastEvent({
                        title: 'Failed',
                        message: 'Could not send the data!',    
                    }); 
                    this.dispatchEvent(eve);
                }
            })
            .catch((error) => {
                this.error = error;
                this.accounts = undefined;
            });  
    }
}
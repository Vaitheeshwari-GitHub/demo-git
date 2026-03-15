import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountRecordPage1 extends LightningElement {
    isSelected = false;

     handleClick() {
        this.isSelected = !this.isSelected;
        if(this.isSelected){
            const event = new ShowToastEvent({
            title: 'Follow',
            message:
                'Following',
        });
        this.dispatchEvent(event);
    }
    else{
        const event = new ShowToastEvent({
            title: 'Follow',
            message:
                'Unfollowed',
        });
        this.dispatchEvent(event);
    }
}

    
}
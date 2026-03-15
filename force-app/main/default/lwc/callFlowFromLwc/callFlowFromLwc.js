import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class CallFlowFromLwc extends LightningElement {

    openFlow() {

        this[ NavigationMixin.Navigate ]( {
            type: 'standard__webPage',
            attributes: {
                url: '/flow/Account_Name_Screen'
            }
        },
        true
        );
    }
}
import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Demo extends NavigationMixin(LightningElement) {
    @api iframeUrl = 'https://app.powerbi.com/reportEmbed?reportId=3a228737-bd75-42fd-a97a-13b254fc3196&appId=33c3fe36-15f7-414f-ac37-46205bf2b9a4&autoAuth=true&ctid=11377297-9f98-488d-8ac6-7b4482e0c3d8';
    @api url = 'https://miterbrands--uat.sandbox.lightning.force.com/lightning/n/PowerBIApp__PowerBIDashboard';
 handleOpenUrl() {
        // Navigate to the specified URL
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
               // url: this.url
               url: '/apex/PBI_Sales_rep' 
            }
        });
    }
}
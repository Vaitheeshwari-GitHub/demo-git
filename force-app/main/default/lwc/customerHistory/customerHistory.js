import { LightningElement,api,wire,track } from 'lwc';
import showHistory from '@salesforce/apex/SendToSAP.showHistory';

export default class CustomerHistory extends LightningElement {
    currencyIsoCode;
    @api recordId;
    columns;
    data=[];
    rowOffset = 0;
    @wire(showHistory, {recordId: '$recordId'})
    wiredAccounts({ error, data }) {
        if (data) {
            this.data = data;
            this.columns = this.getColumns();
            this.currencyIsoCode = data.currencyIsoCode;
            console.log(this.data);
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.data = undefined;
        }
    }
        getColumns(){
            return [
                {label: 'CaseNumber',fieldName:'CaseNumber'},
                     {label:'Subject',fieldName:'Subject'},
                     {label:'Origin', fieldName:'Origin'},
                     {label:'Status', fieldName:'Status'},
                     {label:'CreatedDate', fieldName:'CreatedDate'},
                     {label:'Currency', fieldName:'test_currency__c',type: 'currency',typeAttributes: { currencyCode: this.currencyIsoCode}},
                     {label:'c1', fieldName:'c1__c',type: 'currency',typeAttributes: { currencyCode: this.currencyIsoCode}},
                     {label:'c2', fieldName:'c2__c',type: 'currency',typeAttributes: { currencyCode: this.currencyIsoCode}},
                     {label:'c3', fieldName:'c3__c',type: 'currency',typeAttributes: { currencyCode: this.currencyIsoCode}}
                ];
        }
    
}
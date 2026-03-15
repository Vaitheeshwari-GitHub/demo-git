import { LightningElement, api } from 'lwc';

export default class Lwctest extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields = ['AccountId', 'Name', 'Phone', 'Website', 'Industry'];
}
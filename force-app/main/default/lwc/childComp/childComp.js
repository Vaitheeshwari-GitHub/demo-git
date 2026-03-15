import { LightningElement,api } from 'lwc';
const columns = [
    { label: 'Label', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry', type: 'text' },
    { label: 'Phone', fieldName: 'Rating', type: 'text' },
     
]; 
export default class ChildComp extends LightningElement {
    @api accounts = [];
    columns= columns;
    
    handleClick(){

        console.log("inside new event");
        const lwcEvent = new CustomEvent('newevent',{
            detail:{val:this.template.querySelector('lightning-datatable').getSelectedRows()
        }
        });
        this.dispatchEvent(lwcEvent);
    }
     
}
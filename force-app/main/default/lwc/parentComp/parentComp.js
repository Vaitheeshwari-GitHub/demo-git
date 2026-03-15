import { LightningElement } from 'lwc';
import accountList from '@salesforce/apex/ScreenComponent.accountList';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
const columns = [
    { label: 'Label', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry', type: 'text' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
     
]; 
export default class ParentComp extends LightningElement {
searchKey;
childMessage;
accounts;
BooleanVal= false;
columns= columns;
loading= false;
showTable = false;
displayTable= false;
    copyvalue(event){
        this.searchKey = event.detail.value;
        console.log(this.searchKey);
    }
    getValue(event){
        this.childMessage = event.detail.val;
        console.log("inside get value");
        this.accounts = this.template.querySelector('lightning-datatable').getSelectedRows();
        
    }
    handleClick(){
            if(this.searchKey=== undefined || this.searchKey== ""){
                this.showToast();

            }
            else{
                this.showTable=true;
        this.loading= !this.loading;
        console.log("check");
        accountList({ searchKeyList: this.searchKey })
            .then((result) => {
                this.accounts = result;
                this.error = undefined;
                this.loading= !this.loading;
                console.log("inside else");
          })
            .catch((error) => {
                this.error = error;
                this.accounts = undefined;
            });
            }
            
    }
    showToast() {
        const event = new ShowToastEvent({
            title: 'Enter name!',
            message:
                'Please enter a text to search',
        });
        this.dispatchEvent(event);
    }
}
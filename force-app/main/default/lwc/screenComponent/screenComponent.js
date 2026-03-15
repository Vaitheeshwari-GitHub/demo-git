import { LightningElement } from 'lwc';
import accountList from '@salesforce/apex/ScreenComponent.accountList';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
const columns = [
    { label: 'Label', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry', type: 'text' },
    { label: 'Phone', fieldName: 'Rating', type: 'text' },
    
];


export default class ScreenComponent extends LightningElement {
    searchKey;
    accounts;
    columns = columns;
    loader= false;
    accSize=0;
    showData=false;
    copyvalue(event){
        this.searchKey = event.detail.value;
        console.log(this.searchKey);
    }
     
    searchName()
    {

        accountList({ searchKeyList: this.searchKey })
            .then((result) => {
                this.accounts = result;
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.accounts = undefined;
            });
            if(this.accounts === undefined){
                const eve = new ShowToastEvent({
                    title: 'Alert! Please enter a name to search',
                    message: 'Please enter Search Text',    
                }); 
                this.dispatchEvent(eve);   
            }
            accSize= this.accounts.length;
            if(this.accSize===0){
                this.showData=false;
            }
            else{
                this.showData=true;
            }
            
            //else{
              //  this.loader = !this.loader;
            //}
    }
    //data = [];

   /* connectedCallback() {
        this.data = data;
    }*/
 //@wire(accountList,{searchKeyList: '$searchKey'}) accounts;
 //searchKeyList= this.searchKey;
   /* inputValue;
    loader= false;       
    handleButtonClick(event){
        
        if(this.inputValue === undefined || this.inputValue== ""){
        const eve = new ShowToastEvent({
            title: 'Vaithiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
            message: 'Please enter Search Text',
            
        });
        this.dispatchEvent(eve);
        
    }
    else{
        this.loader = !this.loader;
    }*/
  
}
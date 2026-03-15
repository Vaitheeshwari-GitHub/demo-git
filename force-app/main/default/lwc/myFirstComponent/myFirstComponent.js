import { LightningElement , wire} from 'lwc';
import accountList from '@salesforce/apex/ScreenComponent.accountList'; 
const columnVal = [
    { label: 'Label', fieldName: 'Name' },
    { label: 'Website', fieldName: 'Industry', type: 'text' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    
];

export default class MyFirstComponent extends LightningElement {
    data ;
    columns= columnVal;
    //mame="Nivi";
    @wire(accountList)
    wiredAccounts({ error, data }) {
        if (data) {
            this.data = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }

    inputValue;
    handleInputChange(event){

        this.inputValue=event.detail.value;

        console.log("Input is",this.inputValue);

    }

    handleClick(event){

        console.log("Search is clicked");

    }



    Date1;

    DateTime1;

    DateChange(event){
        console.log("in Date eent");
        console.log(event.target.dataset.id);

        if(event.target.dataset.id==="name"){

            this.Date1=event.detail.value;

            console.log("Date is",this.Date1);

        }

        if(event.target.dataset.id==="2"){

            this.DateTime1=event.detail.value;

            console.log("Date and Time is",this.DateTime1);

        }

    }



}
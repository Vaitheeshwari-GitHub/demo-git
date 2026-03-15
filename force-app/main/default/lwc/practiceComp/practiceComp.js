import { LightningElement, wire,api} from 'lwc';
import {EXAMPLES_COLUMNS_DEFINITION_BASIC,EXAMPLES_DATA_BASIC,} from './sampleData';
import getAccounts from '@salesforce/apex/getAccounts.getAccounts';
import getAccountsList from '@salesforce/apex/getAccounts.getAccountsList';

const columns = [
    { label: 'Name', fieldName: 'Name', editable: true },
    { label: 'Email', fieldName: 'Email__c', type: 'Email', editable: true },
    { label: 'Phone', fieldName: 'Phone', type: 'phone', editable: true },
    { label: 'Industry', fieldName: 'Industry', type: 'text', editable: true },
    ];

export default class PracticeComp extends LightningElement {
    column = [
        { label: 'Name', fieldName: 'Name', editable: true },
        { label: 'Phone', fieldName: 'Phone', type: 'phone', editable: true },
        { label: 'Industry', fieldName: 'Industry', type: 'text', editable: true },
        { label: 'Upload file',type: 'fileUpload', typeAttributes: { acceptedFormats: '.jpg,.jpeg,.pdf,.png' }
        },
    ];
    @api content;
    accountRecords = []; 
    error; 
    columns = columns;
    recordSize = 0;
    isLoadingBool = true;
    infiniteLoadingBool = true;
    accList = [];

    gridColumns = EXAMPLES_COLUMNS_DEFINITION_BASIC;
    gridData = EXAMPLES_DATA_BASIC;
    connectedCallback() {
        this.onLoadMore();

    }
    onLoadMore() { 
    getAccounts({ intOffSet : this.recordSize } )   
        .then( result => {
	        if ( result.length > 0 ) {

                if ( this.recordSize > 0 ) {
                
                    this.accountRecords = [ ...this.accountRecords, ...result ];
                } else {

                    this.accountRecords = result;

                }
            } else {

                this.infiniteLoadingBool = false;
                
            }
            this.isLoadingBool = false;

        }) 
        .catch( error => { 
 this.error = JSON.stringify( error ); 

        }); 
        this.recordSize = this.recordSize + 5;
 
    } 
    handleSave(event) {
        this.saveDraftValues = event.detail.draftValues;
    }
    handlePromptClick() {
        LightningPrompt.open({
            message: 'this is the prompt message',
            //theme defaults to "default"
            label: 'Please Respond', // this is the header text
            defaultValue: 'initial input value', //this is optional
        }).then((result) => {
            //Prompt has been closed
            //result is input text if OK clicked
            //and null if cancel was clicked
        });
    }

    copyval;
    value;
    valueToSend = "Hi, I am from Parent Component";
    selected = [];
    strInput;
    handleChange( event ) {
        this.strInput = event.target.value;
    }
    get options(){
        return [
            { label: 'English', value: 'en' },
            { label: 'German', value: 'de' },
            { label: 'Spanish', value: 'es' },
            { label: 'French', value: 'fr' },
            { label: 'Italian', value: 'it' },
            { label: 'Japanese', value: 'ja' },
        ];
    }
    get selected() {
        return this._selected.length ? this._selected : 'none';
    }
    handleChange(event){
        this.selected = event.detail.value;
    }
    copyVal(event){
        this.copyval = event.target.value;
    }
    searchVal(event){
        this.value = this.copyval;
    }
    handleUploadFinished(event) {
        event.stopPropagation();
        console.log('data => ', JSON.stringify(event.detail.data));
    }
    @wire(getAccountsList)
    getAccountsList({ error, data }) {
        if (data) {
            this.accList = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accList = undefined;
        }
    }
}
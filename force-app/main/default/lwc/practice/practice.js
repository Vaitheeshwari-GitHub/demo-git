import { LightningElement, wire, track } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Practice extends LightningElement {
    passId;
    myFunction(){
        var x = document.getElementById("pass");
        
        //var x = event.detail.value;
        console.log("type"+x);
        console.log(this.passId);
        console.log("test");
        if (x.type === "password") {
            x.type = "text";  
            console.log(x);
        }
        else {
            x.type = "password"; 
            console.log(x);
         }
    }
    copyVal(event){
        this.passId = event.target.value;
    }
    handleclick(event){
        this.file = event.target.files;
        console.log(this.file);
    }
    get acceptedFormats() {
        return ['.pdf', '.png'];
    }
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
    handleUploadFinished(event) {
        // Get the list of uploaded files
        const uploadedFiles = event.detail.files;
        alert('No. of files uploaded : ' + uploadedFiles.length);
    }
    psw1;
    psw2;
    copypassword1(event){
        this.psw1 = event.target.value;
    }
    copypassword2(event){
        this.psw2 = event.target.value;
    }
    checkpassword(){
        if(this.psw1 != this.psw2){
            alert("Passwords did not match"); 
        }
    }
    @track result;
    @track birthdate;
    today = new Date();

    handleChangeNum1(event){
        const inpurdate = event.target.name;
        const inputvalue= event.target.value;
        if(inpurdate=='BirthDate'){
            this.birthdate=inputvalue;
        }

    }
    calculateDOB (event) {

        this.result=today.getfullyear-this.birthdate.getfullyear;
        if(this.result <= 18){
            alert("please enter a valid dob");
        }
    }
    
}
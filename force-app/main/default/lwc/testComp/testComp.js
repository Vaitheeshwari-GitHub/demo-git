import { LightningElement,track } from 'lwc';

export default class testComp extends LightningElement {
    dateval(DOB) {
        var today = new Date();
        var birthDate = new Date(DOB);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }    
        if(age< 18){
            alert("DOB not valid");
        }
    }
    

    options = [
        { label: 'CSE', value: 'option1' },
        { label: 'ECE', value: 'option2' },
        { label: 'CS-BS', value: 'option3' },
        { label: 'IT', value: 'option4' },
        { label: 'Mechanical', value: 'option5' },
        { label: 'EEE', value: 'option6' },
    ];
    value = ['option1'];
    filehandle(event){
        this.file = event.target.files;
    }

    handleChange(event) {
        const changeValue = event.detail.value;
        alert(changeValue);
    }
    handleSubmit(event){
        eval("$A.get('e.force:refreshView').fire();");
    }
}
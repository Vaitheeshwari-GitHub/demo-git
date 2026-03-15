import { LightningElement } from 'lwc';

export default class ApplicationForm extends LightningElement {
    options = [
        { label: 'CSE', value: 'option1' },
        { label: 'ECE', value: 'option2' },
        { label: 'CS-BS', value: 'option3' },
        { label: 'IT', value: 'option4' },
        { label: 'Mechanical', value: 'option5' },
        { label: 'EEE', value: 'option6' },
    ];
    value = ['option1'];

    handleChange(event) {
        const changeValue = event.detail.value;
        alert(changeValue);
    }
}
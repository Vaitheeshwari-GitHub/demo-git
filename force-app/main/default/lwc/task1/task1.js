import { LightningElement } from 'lwc';

export default class Task1 extends LightningElement {
    name;
    Options = [
        { value: 'Male', label: 'Male' },
        {
            value: 'Female',
            label: 'Female'
        },
        {
            value: 'Other',
            label: 'Other'
        },
    ];
    copyName(event){
        this.name = event.detail.value;
    }
}
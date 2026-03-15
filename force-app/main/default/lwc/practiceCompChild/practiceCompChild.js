import { LightningElement,api } from 'lwc';

export default class PracticeCompChild extends LightningElement {
    @api getval;
    @api valfromparent;
    @api strOutput;

}
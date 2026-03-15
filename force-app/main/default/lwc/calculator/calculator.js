import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    text1;
    text2;
    res;
    symbol;
    copyText1(event){
        this.text1 =parseInt(event.target.value);
    } 
    copyText2(event){
        this.text2 = parseInt(event.target.value);
    }
    handleAdd(){
        this.res = parseInt(this.text1) + parseInt(this.text2);
        this.symbol ='+';
    }
    handleSub(){
        this.res = this.text1 - this.text2;
        this.symbol='-';
    }
    handleMul(){
        this.res = this.text1 * this.text2;
        this.symbol='*';
    }
    handleDiv(){
        this.res = this.text1 / this.text2;
        this.symbol='/';
    }
}
import { LightningElement } from 'lwc';
import retrieveNews from '@salesforce/apex/newsAPI.retrieveNews';
export default class NewsComponent extends LightningElement {
    connectedCallback(){
        this.fetchNews();
    }
    fetchNews(){
        retrieveNews().then(response=>{
            console.log(response)
        }).catch(error=>{
            console.error(error);
        })
    }
}
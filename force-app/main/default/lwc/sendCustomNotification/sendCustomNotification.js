import { LightningElement, api, track } from 'lwc';
import notifyUsers from '@salesforce/apex/CustomNotificationFromApex.notifyUsers';
import getNotificationList from '@salesforce/apex/CustomNotificationFromApex.getNotificationList';
export default class SendCustomNotification extends LightningElement {
    @api recordId;
    @track notificationOptions = [];
    showNotificationTypePicklist = false; 
 
    connectedCallback(){
        this.notificationJson.targetId = this.recordId;
        getNotificationList()
        .then((result) => {
            result.forEach(element => {
                this.notificationOptions.push({label: element.CustomNotifTypeName, value: element.Id});
            });
            this.showNotificationTypePicklist = true;
        })
        .catch((error) => {
            console.log(error);
        });
    }
 
    handleClick1(){
        notifyUsers({ 
            wrapp : this.notificationJson
        })
        .then((result) => {
            alert('Notification Sent');
        })
        .catch((error) => {
            console.log(error);
        });
    }
    handleClick2(){
        notifyUsers({ 
            wrapp : this.notificationJson
        })
        .then((result) => {
            alert('Notification Sent');
        })
        .catch((error) => {
            console.log(error);
        });
    }
    handleClick3(){
        notifyUsers({ 
            wrapp : this.notificationJson
        })
        .then((result) => {
            alert('Notification Sent');
        })
        .catch((error) => {
            console.log(error);
        });
    }
 
    @track notificationJson = {
        title: null,
        body: null,
        customNotificationType: null,
        pgRef: null
    };
 
    handleTitle(event){
        this.notificationJson.title = event.detail.value;
    }
 
    //hanlder for body input
    handleBody(event){
        this.notificationJson.body = event.detail.value;
    }
 
    //hanlder for notification type picklist
    handleNotificationTypeChange(event){
        this.notificationJson.customNotificationType = event.detail.value;
    }
}
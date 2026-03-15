import { api, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import magnumInterview from "./magnumICW.js"; //this could probably also be a static resource
import magnumLib from "@salesforce/resourceUrl/magnumTest";
import { loadStyle, loadScript } from "lightning/platformResourceLoader";

export default class SwissReMagnumInterviewExt extends LightningElement {

    @api securitySessionToken;

    magnumInitialized = false;

    async renderedCallback() {
        if (this.magnumInitialized) {
            return;
        }
        
        try {
            loadStyle(this, magnumLib + "/magnum.min.css").then(() => {
                console.log('magnum.min.css loaded!');
                loadScript(this,  magnumLib + '/magnum-cloud-security.min.js').then(() => {
                    // your code with calls to the JS library
                    console.log('magnum-cloud-security.min.js loaded!');
                    loadScript(this,  magnumLib + '/magnum.min.js').then(() => {
                        // your code with calls to the JS library
                        console.log('magnum.min.js loaded!');
                        loadScript(this,  magnumLib + '/message3.js').then(() => {
                            // your code with calls to the JS library
                            console.log('message3.js loaded!');
                            loadScript(this,  magnumLib + '/message2.js').then(() => {
                                // your code with calls to the JS library
                                console.log('message2.js loaded!');
                                loadScript(this,  magnumLib + '/message.js').then(() => {
                                    // your code with calls to the JS library
                                    console.log('message.js loaded!');
                                    this.initializeMagnum();
                                });
                            });
                        });
                    });
                });
            });
/*
            await Promise.all([
                //loadScript(this, magnumLib + "/message.js"),
                //loadScript(this, magnumLib + "/messagestrict.js"),
                loadScript(this, magnumLib + "/magnum.min.js"),
                loadScript(this, magnumLib + "/magnum-cloud-security.min.js"),
                loadStyle(this, magnumLib + "/magnum.min.css"),
            ]).then(() => {
                this.initializeMagnum();
            });
*/
        } catch (error) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: "Error loading Magnum JS/CSS",
                    message: error.message,
                    variant: "error",
                }),
            );
            console.log(error);
        }
    }

    initializeMagnum() {
        console.log('external libraries loaded!');
        this.magnumInitialized = true; 
        this._createComp();
    }

    _createComp() {
        const magnumInterview = document.createElement("magnum-icw");
        magnumInterview.setAttribute("id", "magnum-icw");
        magnumInterview.setAttribute("base-url", "https://login.salesforce.com");
        console.log("magnum interview created CHANGE!!");
        magnumInterview.setAttribute("security-session-token", this.securitySessionToken);
        magnumInterview.onmagnuminterviewcreated = () => {
            console.log("ON magnum interview created");
        };

        console.log("NOTE: " + this.template.querySelector(".mcontainer"));
        this.template.querySelector(".mcontainer").appendChild(magnumInterview);
    }

}
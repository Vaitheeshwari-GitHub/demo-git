// Create a class for the element
// Source: https://github.com/mdn/web-components-examples/blob/main/popup-info-box-web-component/main.js
class MagnumICW extends HTMLElement {
    shadow; /** using this to store a reference to the shadowroot since this.shadowRoot
    //does not seeem to be available when we use "mode: closed" in the attachShadow call
    //lwc does not support "mode": "open" in the attachShadow call. not sure if this is the right way **/
    connectedCallback() {

    }
  
    constructor() {
      // Always call super first in constructor
      super();
  
      // Create a shadow root
      const shadow = this.attachShadow({ mode: "closed" });
      this.shadow = shadow;
    }
  }
  
  customElements.define("magnum-icw", MagnumICW);
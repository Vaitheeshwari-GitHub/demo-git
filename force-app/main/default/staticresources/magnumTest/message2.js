function mylib() {
    const res = {
      init: (data) => {
        let loading = new CustomEvent('loading', {detail: { loading: true }});
        MyLib.dispatchEvent(loading);
        let creating = new CustomEvent('loading-hyphen', {detail: { loading: true }});
        MyLib.dispatchEvent(creating);
        let magnum = new CustomEvent('magnum-interview-created', {});
        MyLib.dispatchEvent(magnum);
      }
    }
    return res;
  }
  
  const MyLib = new Proxy(mylib(), {
    get: function(target, prop) {
      if (prop === `addEventListener`) {
        return (...args) => document.addEventListener(...args);
      } 
      if (prop === `dispatchEvent`) {
        return (...args) => document.dispatchEvent(...args);
      }
      return target[prop];
    }
  });
  
  MyLib.addEventListener('loading', () => { console.log("loading event in message TWO") });
  MyLib.addEventListener('loading-hyphen', () => { console.log("loading-hyphen event in message TWO") });
  MyLib.addEventListener('magnum-interview-created', () => {
    console.log("message.js ==> magnum-interview-created event TWO");
  });
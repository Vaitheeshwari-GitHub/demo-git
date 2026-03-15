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
        return (...args) => window.addEventListener(...args);
      } 
      if (prop === `dispatchEvent`) {
        return (...args) => window.dispatchEvent(...args);
      }
      return target[prop];
    }
  });
  
  MyLib.addEventListener('loading', () => { console.log("loading event in message THREE") });
  MyLib.addEventListener('loading-hyphen', () => { console.log("loading-hyphen event in message THREE") });
  MyLib.addEventListener('magnum-interview-created', () => {
    console.log("message.js ==> magnum-interview-created event THREE");
  });
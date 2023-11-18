window.modules = {};
window.state = {};

window.goget = async function(url, module){
   try { 
      const data = await fetch(url);
      const content = await data.text();
    
      const createModule = new Function('exports', content);
      const exports = {};
      createModule(exports);

      window.modules[module] = exports;
   } 
   catch(error){
      console.error(`Error including file from ${url}: `, error);
   }
   
};

const include = (url) => {
   return new Promise((resolve, reject) => {
       const xhr = new XMLHttpRequest();
       xhr.open('GET', url);

       xhr.onload = () => {
           if (xhr.status >= 200 && xhr.status < 300 && new URL(url).origin === window.location.origin) {
               try {
                   const scriptText = xhr.responseText;
                   const script = document.createElement('script');
                   script.textContent = scriptText;
                   document.body.append(script);
                   console.log(`Script loaded from ${url}`);
                   resolve(); // Resolve the promise when the script is successfully loaded
               } catch (e) {
                   console.error(`Error executing script from ${url}: ${e.message}`);
                   reject(e); // Reject the promise if there's an error
               }
           } else {
               console.error(`Error loading script from ${url}: Status ${xhr.status}`);
               console.log(`Including libraries from ${url} is forbidden. Use local scripts only.`);
               reject(`Error loading script from ${url}: Status ${xhr.status}`);
           }
       };

       xhr.onerror = () => {
           console.error(`Network error while loading script from ${url}`);
           reject(`Network error while loading script from ${url}`);
       };

       xhr.send();
   });
};


window.require = function(globalName, name){
   return window[globalName][name] || null;
};

window.define = function(name, globalName, content){
   if (!window[globalName]) {
      window[globalName] = {};
  }

   //Attach the module to the global space
   window[globalName][name] = {content};
   console.log("After setting:", window[globalName][name]);
}

window.callAPI = async function(url){
   try {
      const res = await fetch(url);
      if(!res.ok){
         throw new Error(`ERROR: ${res.status}`);
      }
      const json = await res.json();
      return json;
   }
   
   catch (error){
      console.error(`Error fetching API data from ${url}: `, error);
   }
}

include('http://127.0.0.1:5500/global/global.js').then(() => {
   console.log(window.state.isClicked = true);
})

include('http://127.0.0.1:5500/router/router.js').then(() => {
   const router = window.modules.Router.content;
   router.addRoute('about', '/about');
   console.log(router);

})
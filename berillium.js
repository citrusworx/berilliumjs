window.myModules = {};
window.state = {};

window.goget = async function(url, module){
   try { 
      const data = await fetch(url);
      const content = await data.text();
    
      const createModule = new Function('exports', content);
      const exports = {};
      createModule(exports);

      window.myModules[module] = exports;
   } 
   catch(error){
      console.error(`Error including file from ${url}: `, error);
   }
   
};

window.include = (url) => {
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
           } catch (e) {
               console.error(`Error executing script from ${url}: ${e.message}`);
           }
       } else {
           console.error(`Error loading script from ${url}: Status ${xhr.status}`);
           console.log(`Including libraries from ${url} is forbidden. Use local scripts only.`);
       }
   };

   xhr.onerror = () => {
       console.error(`Network error while loading script from ${url}`);
   };

   xhr.send();
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

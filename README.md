# berilliumjs

A powerful, vanilla JavaScript library that turns vanillajs into the new standard...finger crossed 🫰🏼

## Utilizing AJAX

We are putting AJAX to the test to create Single Page Applications and MVC frameworks in the Vanillajs universe. We are excited about this project for many reasons. We want to provide a complete lean, modular front end that can be put into use on light infrastructure where the user experience has to sacrifice nothing.

### Global.js 🌎

Global.js is the library that houses all helper functions and classes. It houses the Super Helper functions `include`, `goget`, `require`, and `callAPI`.

#### include

```js
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

```

#### goget

`goget` is a helper function that fetches external API documents. This function will be redesigned to work with JSON documents. This was originally a function designed to work with Free APIs. 

With our Berillium ecosystem, most of your data fetching will be done on the backend. The front end is a presentation layer.

```js
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
```

#### require

`require` is a simple global function that can import globally defined objects, functions, and classes.

```js
window.require = function(globalName, name){
   return window[globalName][name] || null;
};
```

#### callAPI

`callAPI` is a helper function as a start to fetch external API documents that you have created. This is an internal script. **This script is meant to fetch internal/private API data.** The base permissions is for base URL only. *This does not include subdomains.* You can configure subdomains within the URL parameter object.

```js
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
```

### Router.js 🚄

Router.js is our MVC library.  

### Spa.js 🕸️

Spa.js is our single page application library. Built on the back of XHR, we can utilize the Browser API and Redux to create a scalable, manageable application.
# berilliumjs

A powerful, vanilla JavaScript library that utilizes both Vanillajs and Nodejs based applications.

## Building a Universal, A'la Carte Web Library

We are putting Node and AJAX to the test to create Single Page Applications and MVC frameworks in the Vanillajs universe. We are excited about this project for many reasons. We want to provide a complete lean, modular front end that can be put into use on light infrastructure where the user experience has to sacrifice nothing.



### VANILLA

#### Global.js 🌎

Global.js is the library that houses all helper functions and classes. It houses the Super Helper functions `include`, `goget`, `require`, and `callAPI`.

##### include

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

##### goget

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

##### require

`require` is a simple global function that can import globally defined objects, functions, and classes.

```js
window.require = function(globalName, name){
   return window[globalName][name] || null;
};
```

##### callAPI

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
## Node

```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import HomeController from '../controllers/home-controller';

export class Router {
    constructor() {
        console.log('Router has been intialized...')
    }

    static routes = {
        home: '/'
        // Add more routes here
    }

    static controller = {
        "/": HomeController,
    }

    static async route(url) {
        console.log(`Attempting to route to URL: ${url}`);
        try {
            const controller = Router.controller[url];
            if (controller) {
                const container = document.getElementById('app');
                if (!container) throw new Error('Root container not found');

                if(!Router.root){
                    Router.root = createRoot(container)
                }
                Router.root.render(React.createElement(controller));
            } else {
                throw new Error('Route not found');
            }
        } catch (error) {
            console.error('Error in setting up route: ', error.message);
        }
    }

    init(){
        window.addEventListener('popstate', (event) => {
            Router.route(event.state?.path || '/', "home");
        });
    
        document.addEventListener('click', (event) => {
            let target = event.target;
        
            // Traverse up the DOM tree to find an element with 'data-loader' attribute
            while (target && !target.matches('[data-loader]')) {
                target = target.parentElement;
            }
        
            if (target) {
                event.preventDefault();
                const path = target.getAttribute('href');
                if (path) {
                    Router.navigate(path);
                } else {
                    console.error('No path found on clicked element');
                }
            }
        });
    }

    static navigate(path){
        history.pushState({ path }, '', path);
        Router.route(path);
    }

    addRoute(name, url){
        // Add Route to Routes object
        Router.routes[name] = url;
        console.log(`Controller added for route: ${url}`);
    }

    addController(url, controller){
        Router.controller[url] = controller 
        console.log(`Added controller for route: ${url}`)
    }

    viewRoutes(){
        return Router.routes;
    }

    viewControllers(){
        return Router.controller;
    }
}


```

### Spa.js 🕸️

Spa.js is our single page application library. Built on the back of XHR, we can utilize the Browser API and berilliumStateMate. `stateMate` is our answer for Vanillajs global state management.

#### Router.js 🚄

Router.js is our MVC library. 

### statemate.js

We wanted to research and design state on the client and server side. 
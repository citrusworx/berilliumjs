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


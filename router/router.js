// Define the XHR Router
// vanillajs only
class Router {
    constructor(){

    }
    static xhr = new XMLHttpRequest();

    static routes =  {
        home: '/',
        // Add more routes here
    }

    static controller = {

    }

    route(url){
        this.xhr.open('GET', url);
        this.xhr.onload= () => {
        if(this.xhr.status >= 200 && this.xhr.status < 300){
        // Define Success 200 
            
        }
        else if(this.xhr.status >= 300 && this.xhr.status < 300){
        // Define Redirect 300
            console.log(xhr.statusText);
            const error = new Error('Page has been moved');
            throw error;
    }
        else if(this.xhr.status >= 400 && this.xhr.status < 500){
        // Define Not Found 404
            console.log(xhr.statusText);
            const error = new Error("Page not found");
            throw error;
    }
        else if(this.xhr.status >= 500 && this.xhr.status < 600){
        // Define Internal Server Error 501/502/503
            console.log(xhr.statusText);
            const error = new Error('Internal Server Error: ');
            throw error;
            
            }
        else{
            return 'Unknown server error';
            }
        }
    }

    static addController(name, control){
       this.controller[name] = control; 
    }

   static addRoute(name, path){
        this.routes = {
            ...this.routes,
            [name]: path
        }
    }
}

define('Router', 'modules', Router);
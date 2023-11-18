class Router {
    constructor() {
        console.log('Router has been intialized...')
    }

    static routes = {
        home: '/'
        // Add more routes here
    }

    static controller = {

    }

    async route(url){
        try {
            const res = await fetch(url);
            if(res.ok){
                const data = await res.text();
            }
            else {
                throw new Error(`${res.status}: ${res.statusText}`);
            }
        }
        catch(error){
            throw new Error('Error in setting up route: ', error);
        }

    }

    static init(){
        window.addEventListener('popstate', (event) => {
            this.route(event.state.path);
        });

        document.addEventListener('click', (event) => {
            if(event.target.matches('[data-loader]')) {
                event.preventDefault();
                let path = event.target.getAttribute('href');
                Router.navigate(path);
            }
        })
    }

    static navigate(path){
        history.pushState({ path }, '', path);
        this.route(path);
    }

    static addRoute(){

    }

    static addController(){

    }

    viewRoutes(){
        return Router.routes;
    }
}

module.exports = Router;

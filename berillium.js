const {define} = require('./global/global.js');
const Routerjs = require('./router/router.js');
const router = new Routerjs();

if(typeof global['state'] === 'undefined'){
   global['state'] = {}
}

define('createState', 'state', function createState(state_attr, state_value){
   global['state'] = {
       ...global['state'], 
       [state_attr]: state_value
   }
})
const createState = global.state.createState;

createState('setState', (prop, value) => {
   global['state'][prop] = value;
});

createState('getState', (prop) => {
   return global['state'][prop];
});
createState('isClicked', false);


console.log(define);
console.log(router.viewRoutes());
console.log(global.state);
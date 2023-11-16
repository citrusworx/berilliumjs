// Create global helper functions and classes
// import them here
/**
 * State Object.
 * @param {boolean} isClicked - The first parameter.
 * @param {boolean} isToggled - The second parameter.
 * @returns {boolean} - The result of the function.
 */

define('setState', 'state', function setState(stateProp, valueProp,  value){
        window[stateProp] = {
    [valueProp]: value
        }
});

define('getState', 'state', function getState(prop){
    return window.state[prop]
});

define('createState', 'state', function createState(state_attr, state_value){
        window.state = {
            [state_attr]: state_value
        }
})

// | All other code goes below here   | 
// | Happy coding!                    |
// v                                  v
    

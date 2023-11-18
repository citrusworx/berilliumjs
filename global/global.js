// Create global helper functions and classes
// import them here
/**
 * State Object.
 * @param {boolean} isClicked - The first parameter.
 * @param {boolean} isToggled - The second parameter.
 * @returns {boolean} - The result of the function.
 */


const define = (name, moduleName, content) => {

    global[moduleName] = {
       [name]: content
    }
 
 }

// | All other code goes below here   | 
// | Happy coding!                    |
// v                                  v


// export here :D
module.exports = {define}

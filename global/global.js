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

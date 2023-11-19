const createState = (state_attr, state_value) => {
    if(typeof globalThis.state === 'undefined'){
        globalThis.state = {}
    }
    globalThis['state'] = {
      ...globalThis['state'],
      [state_attr]: state_value,
    };
  };
  
  const setState = (prop, value) => {
    globalThis['state'][prop] = value;
  };
  
  const getState = (prop) => {
    return globalThis['state'][prop];
  };
  

  module.exports = {
    createState,
    setState,
    getState,
  };
  
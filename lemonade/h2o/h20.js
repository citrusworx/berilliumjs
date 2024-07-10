class H20 {
    constructor(baseURL = ''){
        this.baseURL = baseURL;
    }

    async request(endpoint, method,  options) {
        const url = await fetch(`${this.baseURL}/${endpoint}`, options);
        const { headers, body, params} = options;
        let queryString = '';

        if(params){
            queryString = '?' + new URLSearchParams(params).toString();
        }

        try {
            const response = await fetch(url + queryString, {
            method,
            headers: {
              'Content-Type': 'application/json',
              ...headers,
            },
            body: method !== 'GET' ? JSON.stringify(body) : null,
          });
         
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
    
          return await response.json();
        } 
        
        catch (error) {
          console.error('Fetch Error:', error);
          throw error;
        }
      }
    }
    

    export { H20 }
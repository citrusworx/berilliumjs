// XHR API Powerhouse for older browser support

// This code demonstrates how to use the XHR API to make HTTP requests
// and handle the response asynchronously.

// Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Define a callback function to handle the response
xhr.onreadystatechange = function() {
  // Check if the request is complete and successful
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Parse the response text as JSON
    let response = JSON.parse(xhr.responseText);

    // Log the response data to the console
    console.log(response);
  }
    //   Error handling

    if (xhr.status === 404) {
      console.log('Not found');
    }
    else if(xhr.status = 300) {
        console.log('Redirect');
    }
    else {
        console.log('Something went wrong');
    }
    
};

// Open a GET request to the specified URL
xhr.open('GET', 'https://api.example.com/data', true);
xhr.withCredentials = true;
xhr.responseType = 'text';
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send();



export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const responseData = "This is the response from the API!";
      resolve(responseData); // Resolve the promise with the response data
    }, 2000); // Simulating a 2-second delay
  });
}

// Using the getResponseFromAPI() function
const responsePromise = getResponseFromAPI();

responsePromise.then(response => {
  console.log(response); // Print the response when the promise is resolved
}).catch(error => {
  console.log(error); // Handle any errors that occur during the promise execution
});


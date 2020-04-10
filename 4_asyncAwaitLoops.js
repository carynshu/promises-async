const axios = require('axios');

// Set api url names
var url = ['http://names.drycodes.com/', 'http://numbersapi.com/', 'https://hipsum.co/api/', 'http://names.drycodes.com/', 'http://numbersapi.com/' ]

// Set parameters
var parameters = ['1?separator=spaces', '2/math', '?type=hipster-centric&sentences=1', '1?separator=spaces', '5/math' ]

function apiCall(url, param) {
  // Return the response of the api call with provided parameters
  return axios(`${url}${param}`)
}

async function iterateApi() {

  let apiResults = []
  // Start for loop through parameters and urls array
  for (let i = 0; i < parameters.length; i ++) {
    // Due to 'await' the for loop will not continue until the apiCall function returns a promise.
    let response = await apiCall(url[i], parameters[i])
    // Add response data to apiResults
    apiResults.push(i + ' | ' + response.data)
  }
  // When finished iterating, log results in correct order
  console.log(apiResults)
}


iterateApi();
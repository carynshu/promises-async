const axios = require('axios');


// Run FIRST api call
axios.get('http://numbersapi.com/1')
  .then(function(res1) {

    // Log response data
    console.log(res1.data)

    // Run SECOND api call
    return axios.get('http://numbersapi.com/2')
  })
  .then((res2) => {

    // Log response data
    console.log(res2.data)

    // Run THIRD api call
    return axios.get('http://numbersapi.com/3')
  })
  .then((res3) => {

    // Log response data
    console.log(res3.data)
  })
  .catch((err) => {

    console.log(err)
  });

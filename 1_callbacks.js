const request = require('request');

// Run FIRST api call
request('http://numbersapi.com/1', function(err, res, responseData1) {     // <==== 1st api callback  func starts here

  // error handling
  if (err) {
    console.log('An error has occured trying to retrive data from first api call')

  } else {
    // Log response
    console.log(responseData1)
    // On success run our second api call
    request('http://numbersapi.com/2', function(err, res, responseData2) {   // <=== 2nd api callback func starts here

      // error handling
      if (err) {
        console.log('An error has occured trying to retrive data from first api call')

      } else {
        // Log 2nd response
        console.log(responseData2)
        // On success run our third api call
        request('http://numbersapi.com/3', function(err, res, responseData3) {  // <=== 3rd api callback func ends here

          // error handling
          if (err) {
            console.log('An error has occured trying to retrive data from first api call')

          } else {
            // Log 3rd response
            console.log(responseData3)
          }

        })  // <=== 3rd api callback func definition ends here
      }
    })  // <=== 2nd api callback func definition ends here
  }
})   //<=== 1st api callback func definition ends here

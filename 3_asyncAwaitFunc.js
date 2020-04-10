const axios = require('axios');

function one() {
    return axios.get('http://numbersapi.com/1')
      .then((res) => {
        return res.data
      })
}

function two() {
    return axios.get('http://numbersapi.com/2')
      .then((res) => {
        return res.data
      })
}

function three() {

    return axios.get('http://numbersapi.com/3')
      .then((res) => {
        return res.data
      })
}

async function orderedAsync() {

  const num1 = await one();
  console.log(num1)

  const num2 = await two();
  console.log(num2)

  const num3 = await three();
  console.log(num3)

}

orderedAsync(); // lurks in the shadows <-- after 1 second


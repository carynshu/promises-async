const axios = require('axios');

// Notice Promise.resolve()
for (let i = 0, p = Promise.resolve(); i < 5; i ++) {

  p = p.then(() => {
    return axios.get(`http://numbersapi.com/${i}`)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);

      })
  })
}

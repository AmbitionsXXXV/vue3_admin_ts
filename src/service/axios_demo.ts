import axios from 'axios'

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})

// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'etcetera',
//       age: 21
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

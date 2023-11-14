import axios from 'axios'

const service = axios.create({
  baseURL: '/dev-api',
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // before request is sent
    console.log(sessionStorage.getItem('token'))

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['Gab-Token'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code !== 200) {
      console.log('err' + res.code + res.content)
      return Promise.reject(new Error(res.content || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service

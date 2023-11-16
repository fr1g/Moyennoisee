import axios from 'axios'

const service = axios.create({
  baseURL: '/dev-api',
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // before request is sent
    // console.log(sessionStorage.getItem('token'))
    // console.log(config);

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['?token'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    PushToast(error, 'err');
    console.log(`${error}, ${typeof error}`) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // PushToast(0);
    if (res.code == 200 || res.code == undefined) {
      return res
    } else {
      
      if(res.code == 440){
        sessionStorage.removeItem('token');
        PushToast('Token Vanished. ');
        setTimeout(() => {
          window.location.reload();
        }, 600);        
      }
      console.log('err' + res.code + res.content)
      return Promise.reject(new Error(res.content || 'Error'))
    }
  },
  error => {
    console.log('err' + error) // for debug
    PushToast(error, 'err');
    return Promise.reject(error)
  }
)

export default service

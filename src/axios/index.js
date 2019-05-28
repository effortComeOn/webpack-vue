import axios from 'axios'
import Qs from 'qs'

var instance = axios.create({
  baseURL: '',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

instance.interceptors.request.use(config=> {
  if(config.method != 'get' && 'string' != typeof config.data && config.data){
    let ContentType = config.haders['Content-Type'];
    if(ContentType == "application/json"){
      config.body = Qs.parse(config.data)
    }else{
      config.data = Qs.stringify(config.data);
    }
  }
  return config
}, error=>{
  return Promise.reject(error);
});
instance.interceptors.response.use(res=>{
  if(res.data.status == '400'){
    window.location.href = '/'
  }
  if(res.data.status && '2' != (res.data.status + '').charAt(0)) {

  }
  return res.data
},err=>{
  return Promise.reject(error);
})

export default instance
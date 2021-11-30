import { request,response } from './config/index.js'
import axios from 'axios'

const service = axios.create({
    withCredentials: false,  //跨域请求是否允许携带cookie资源凭证
    baseurl: '/api/',
    time: 1000              //请求超时时间
})
// console.log(request);
// 添加request拦截器 (请求拦截器)
service.interceptors.request.use(request.config, request.error);

service.interceptors.response.use(response.response, response.error);

export default service
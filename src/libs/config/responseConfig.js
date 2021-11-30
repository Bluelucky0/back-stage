const responseConfig ={
    response(response){
        if(response.status === 200){
            return Promise.resolve(response)
        }else{
            return Promise.reject(response)
        }
    },error(error){
        if(error && error.response){
            //服务器结果有返回
            switch (error.response.status) {
                case 400:
                    error.response = '错误请求'
                    break;
                case 401:
                    error.response = '未登录,请重新登录'
                    break;
                case 403:
                    error.response = '决绝访问'
                    break;
                case 404:
                    error.response = '请求错误，未找到该资源'
                    break;
                case 405:
                    error.response = '请求方法未允许'
                    break;
                case 408:
                    error.response = '请求超时'
                    break;
                case 500:
                    error.response = '服务器出错'
                    break;
                case 501:
                    error.response = '网络未实现'
                    break;
                case 502:
                    error.response = '网络错误'
                    break;
                case 503:
                    error.response = '服务不可用'
                    break;
                case 504:
                    error.response = '网络超时'
                    break;
                case 505:
                    error.response = 'http版本不支持该请求'
                    break;
                default:
                    error.message = `连接错误${error.response.status}`
            }
        } else {
            //服务器连结果都没有返回  有可能是断网或者服务器奔溃
            if (!window.navigator.online) {
                //断网处理
                Message('网络中断');
                return;
            } else {
                //服务器奔了
                Message('服务器奔了');
                return Promise.reject(error);
            }
        }
    }
}
export default responseConfig;
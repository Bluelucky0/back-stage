const requestConfig = {
    config(config){
        return config;
    },
    error(error){
        return Promise.reject(error);
    }
}
export default requestConfig;
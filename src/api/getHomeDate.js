import { GET } from '../libs/index'

export function getHomeData(){
    return GET({
        url:'/api/home',
        params:{}
    })
}
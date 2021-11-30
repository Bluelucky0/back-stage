import service from './base'

//GET
export function GET({url,params={}}){
    return service({
        url:url,
        methods:'get',
        headers:{},
        params
    })
}

//post
export function POST({url,params={},data={}}){
    return service({
        url:url,
        methods:'post',
        headers:{
            'content-type':'application/json;charset=UTF-8'
        },
        params,
        data:JSON.stringify(data)
    })
}

//put
export function PUT({url,params={},data={}}){
    return service({
        url:url,
        methods:'put',
        headers:{
            'content-type':'application/json;charset=UTF-8'
        },
        params,
        data:JSON.stringify(data)
    })
}

//delete
export function DELETE({url,params={}}){
    return service({
        url:url,
        methods:'delete',
        headers:{},
        params
    })
}
import request from  "@/utils/request"
import store from '@/store/index'

export const login = data =>{
    return request({
        method:'POST',
        url:'/app/v1_0/authorizations',
        data
    })
}

// 获取登录用户信息

export const GetCurrentUser = mobile = () =>{
    return requestIdleCallback({
        method:'GET',
        url:'/app/v1_0/user',
        headers:{
            Authorization:'Bearer'
        }
    })
}
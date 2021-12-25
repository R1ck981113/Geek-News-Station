// 请求模块

import axios from 'axios'

const request = axios.create({
    baseURL:'http://api-toutiao-web.itheima.net/app'//接口的基准路径
})

export default request
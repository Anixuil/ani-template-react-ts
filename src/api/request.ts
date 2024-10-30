/*
 * @Author: Anixuil
 * @Date: 2024-10-30 20:19:42
 * @LastEditors: Anixuil
 * @LastEditTime: 2024-10-30 21:14:10
 * @Description: axios请求封装
 */
import axios from 'axios';

// 创建axios实例
const request = axios.create({
    baseURL: 'http://localhost:8080/ani/upms',
    timeout: 600000, // 请求超时时间
})

// request拦截器
request.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// response拦截器
request.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        if (response.status === 200) {
            const res = response.data;
            return Promise.resolve(res);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export default request;
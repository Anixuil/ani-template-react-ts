/*
 * @Author: Anixuil
 * @Date: 2024-10-30 20:53:07
 * @LastEditors: Anixuil
 * @LastEditTime: 2024-10-30 21:10:32
 * @Description: 测试接口
 */
import request from '@/api/request';

/**
 * @description: 测试接口
 * @return {*}
 */
export function test() {
    return request({
        url: '/test/test',
        method: 'get',
    })
}
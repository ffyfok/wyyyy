/*
 * @Author: zhang
 * @Date: 2022-06-08 09:20:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-08 15:30:48
 * @Descripttion: 
 */

import service from "../";
// 获取轮播图
export function banner(params) {
    return service({
        url: '/banner',
        method: 'get',
        params: params
    })
}

// 推荐歌单
export function personalized(params) {
    return service({
        url: '/personalized',
        method: 'get',
        params: params
    })
}
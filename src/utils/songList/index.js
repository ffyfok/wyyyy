/*
 * @Author: zhang
 * @Date: 2022-06-10 17:59:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-15 17:14:41
 * @Descripttion: 
 */
import service from "..";
// 获取歌曲详情
export function songDetail(params) {
    return service({
        url: '/song/detail',
        method: 'get',
        params: params
    })
}

// 获取歌曲url
export function musicUrl(params) {
    return service({
        url: '/music/url',
        method: 'get',
        params: params
    })
}
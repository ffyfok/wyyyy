/*
 * @Author: zhang
 * @Date: 2022-06-23 10:58:17
 * @LastEditors: 
 * @LastEditTime: 2022-06-23 10:58:42
 * @Descripttion: 
 */
import service from "../";
// 获取歌单详情
export function searchSuggest(params) {
    return service({
        url: '/search/suggest',
        method: 'get',
        params: params
    })
}
/*
 * @Author: zhang
 * @Date: 2022-06-09 09:12:17
 * @LastEditors: 
 * @LastEditTime: 2022-06-09 09:13:18
 * @Descripttion: 
 */
import service from "../";
// 获取歌单详情
export function playlistDetail(params) {
    return service({
        url: '/playlist/detail',
        method: 'get',
        params: params
    })
}
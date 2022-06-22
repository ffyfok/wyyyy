/*
 * @Author: zhang
 * @Date: 2022-06-08 09:12:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-11 17:19:38
 * @Descripttion: 
 */
import axios from 'axios';
// 创建axios 实例
const service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
});

export default service
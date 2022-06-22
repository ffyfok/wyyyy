/*
 * @Author: zhang
 * @Date: 2022-06-07 21:51:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-16 16:41:05
 * @Descripttion: 
 */
import {
    Button,
    Icon,
    Swipe,
    SwipeItem,
    Lazyload,
    Search,
    Toast,
    Popup
} from 'vant';
let plugins = [Button, Icon, Swipe, SwipeItem, Lazyload, Search, Toast, Popup]
export default function getVant(app) {
    plugins.forEach((item) => {
        return app.use(item)
    })
}
/*
 * @Author: zhang
 * @Date: 2022-06-07 21:09:35
 * @LastEditors: 
 * @LastEditTime: 2022-06-07 21:19:08
 * @Descripttion: 
 */
function remSize() {
    //获取设备的宽度
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if (deviceWidth >= 750) {
        deviceWidth = 750
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320
    }
    // 350px =>1 rem =50 px
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
    // 设置字体大小
    document.querySelector('body').style.fontSize = 0.3 + 'rem'

}
remSize()
// 当窗口发生变化
window.onresize = function () {
    remSize()
}
/*
 * @Author: zhang
 * @Date: 2022-06-02 16:49:48
 * @LastEditors: 
 * @LastEditTime: 2022-06-08 09:31:25
 * @Descripttion: 
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
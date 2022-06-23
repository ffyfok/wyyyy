/*
 * @Author: zhang
 * @Date: 2022-06-02 16:49:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-23 11:24:19
 * @Descripttion: 
 */
import VuexPersistence from 'vuex-persist'
import {
  songDetail
} from '../utils/songList'


const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
})
import {
  createStore
} from 'vuex'

export default createStore({

  state: {
    // 歌单列表索引
    songIndex: 0,
    // 歌单列表
    songList: [

    ],
    // 歌曲详情
    content: {},
    /* 是否在播放 */
    isPlay: false,
    /* 历史搜索 */
    historySearch: ['爱你']
  },
  mutations: {
    // 改变歌单
    SetSongList(state, obj) {
      state.songIndex = obj.idIndex
      state.songList = obj.idList
    },
    /* 歌曲详情 */
    GetSongList(state, obj) {
      state.content = {
        ...obj
      }
      state.isPlay = true
      // console.log(state.content.songs);
    },
    ChangeIsPlay(state) {
      state.isPlay = !state.isPlay
    },
    // 添加搜索历史
    AddHistorySearch(state, val) {
      state.historySearch.unshift(val)
      if (state.historySearch.length > 10) {
        state.historySearch.pop()
      }
    }
  },
  actions: {
    // test123(context, value) {
    //   context.commit('test12', value)
    // }
    // setSongList(context, index, dataList) {
    //   // context.commit('GetSongList', index, dataList)
    // }
    /* 获取歌单详情 */
    async getSongList(context, value) {
      /* 获取歌曲id */
      let id = context.state.songList[context.state.songIndex]
      let songs
      // console.log(id);
      await songDetail({
        ids: id
      }).then((res) => {
        // console.log(res.data.songs);
        songs = res.data.songs[0]
      }).catch(() => {

      })
      context.commit('GetSongList', {
        songs
      })
    },
    /* 下一首 */
    nex(context, value) {
      if (context.state.songIndex < context.state.songList.length - 1) {
        context.state.songIndex++
      } else {
        context.state.songIndex = 0
      }
      context.dispatch('getSongList')
    },
    /* 上一首 */
    pre(context, value) {
      if (context.state.songIndex <= 0) {
        context.state.songIndex = context.state.songList.length - 1
      } else {
        context.state.songIndex--
      }
      context.dispatch('getSongList')
    }
  },
  modules: {},

  plugins: [vuexLocal.plugin],

})
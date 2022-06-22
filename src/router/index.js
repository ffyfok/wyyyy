/*
 * @Author: zhang
 * @Date: 2022-06-02 16:49:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-15 10:33:45
 * @Descripttion: 
 */
import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import( /* webpackChunkName: "about" */ '../views/home/index'),
    meta: {
      title: '网易云'
    }

  },
  /* 搜索 */
  {
    path: '/search',
    name: 'Search',
    component: () => import( /* webpackChunkName: "about" */ '../views/search/index'),
    meta: {
      title: '搜索'
    }
  },
  /* 歌单详情 */
  {
    path: '/playDetail',
    name: 'PlayDetail',
    component: () => import( /* webpackChunkName: "about" */ '../views/playDetail/index'),
    meta: {
      title: '歌单'
    }
  },
  /* 歌曲详情 */
  {
    path: '/song',
    name: 'Song',
    component: () => import( /* webpackChunkName: "about" */ '../views/song/index'),
    meta: {
      title: '歌曲详情'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})
export default router
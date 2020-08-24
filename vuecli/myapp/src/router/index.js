import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Tv',
    component: () => import('../views/tv/Tv.vue')
  },{
    path: '/book',
    name: 'Book',
    component: () => import('../views/book/Book.vue'),
    //通过路由钩子函数的to获取path，可以初始化页面 防止刷新重置
    // beforeEnter: (to, from, next) => {
    //   console.log(to,from,next)
    // }
  },{
    path: '/music',
    name: 'Music',
    component: () => import('../views/music/Music.vue')
  },{
    path: '/talk',
    name: 'Talk',
    component: () => import('../views/talk/Talk.vue')
  }
  ,{
    path: '/tvdetail/:id',
    name: 'TvDetail',
    component: () => import('../views/tv/TvDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

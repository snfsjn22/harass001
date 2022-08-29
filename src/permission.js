import router from '@/router'
import store from './store'
import NProgress from 'nprogress' // 引入进度条插件
import 'nprogress/nprogress.css'

// 定义白名单，里面是不受权限控制的页面
const whiteList = ['/login', '/404']
router.beforeEach(async (to, from, next) => {
  NProgress.start() // 一开始就开启进度条
  // 判断有无token
  if (store.getters.token) {
    // 有token
    // 去登录页
    if (to.path === '/login') {
      next('/') // 跳转到主页
    } else {
      if (!store.getters.userId) {
        await store.dispatch('user/getUserInfo')
      }
      next() // 不是主页就放行
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) > -1) {
      // 在白名单里，放行
      next()
    } else {
      next('/login') // 跳转到登录页
    }
  }
  NProgress.done() // 强制关闭，解决手动切换地址进度条不关闭问题
})
router.afterEach(function () {
  NProgress.done() // 关闭进度条
})

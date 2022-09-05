// 全局自定义组件在此注册
import PageTools from './PageTools'
export default {
  install(Vue) {
    // 组件注册
    Vue.component('PageTools', PageTools)
  }
}

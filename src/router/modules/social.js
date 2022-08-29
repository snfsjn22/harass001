import Layout from '@/layout'
// 导出员工的路由规则
export default {
  path: '/social', // 路由地址
  name: 'social',
  component: Layout,
  children: [
    {
      path: '', // 不写表示默认路由
      component: () => import('@/views/social'),
      // 路由元信息，用来存储数据
      meta: {
        title: '社保' // 左侧导航读取title属性
      }
    }
  ]
}

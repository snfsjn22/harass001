import Layout from '@/layout'
// 导出员工的路由规则
export default {
  path: '/setting', // 路由地址
  name: 'settings',
  component: Layout,
  children: [
    {
      path: '', // 不写表示默认路由
      component: () => import('@/views/setting'),
      // 路由元信息，用来存储数据
      meta: {
        title: '公司设置', // 左侧导航读取title属性
        icon: 'setting'
      }
    }
  ]
}

import Layout from '@/layout'
// 导出员工的路由规则
export default {
  path: '/departments', // 路由地址
  name: 'departments',
  component: Layout,
  children: [
    {
      path: '', // 不写表示默认路由
      component: () => import('@/views/departments'),
      // 路由元信息，用来存储数据
      meta: {
        title: '组织架构' // 左侧导航读取title属性
      }
    }
  ]
}

import Layout from '@/layout'
// 导出员工的路由规则
export default {
  path: '/attendances', // 路由地址
  name: 'attendances',
  component: Layout,
  children: [
    {
      path: '', // 不写表示默认路由
      component: () => import('@/views/attendances'),
      // 路由元信息，用来存储数据
      meta: {
        title: '考勤' // 左侧导航读取title属性
      }
    }
  ]
}

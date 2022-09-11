import Layout from '@/layout'
// 导出员工的路由规则
export default {
  path: '/employees', // 路由地址
  name: 'employees',
  component: Layout,
  children: [
    {
      path: '', // 不写表示默认路由
      component: () => import('@/views/employees'),
      // 路由元信息，用来存储数据
      meta: {
        title: '员工管理', // 左侧导航读取title属性
        icon: 'people'
      }
    },
    {
      path: 'detail/:id', // query传参 动态路由传参
      component: () => import('@/views/employees/detail'),
      hidden: true, // 不在左侧菜单显示
      meta: {
        title: '员工详情' // 标记当前路由规则的中文名称 后续在做左侧菜单时 使用
      }
    }
  ]
}

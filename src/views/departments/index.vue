<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 组织架构头部内容 -->
      <el-card class="tree-card">
        <!-- 结构内容 -->
        <tree-tools :tree-node="company" :is-root="true"></tree-tools>
        <!-- 树形结构 -->
        <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
          <!-- 传入插槽内容 -->
          <!-- 放置结构内容 -->
          <tree-tools slot-scope="{ data }" :tree-node="data"></tree-tools>
          <!-- /传入插槽内容 -->
        </el-tree>
      </el-card>
      <!-- /组织架构头部内容 -->
    </div>
  </div>
</template>

<script>
import TreeTools from './components/tree-tools.vue'
export default {
  components: {
    TreeTools
  },
  data() {
    return {
      // 头部数据结构
      company: {
        name: '江苏传智播客教育科技股份有限公司',
        manager: '负责人'
      },
      defaultProps: {
        label: 'name' // 从name显示内容
      },
      // 树形数据结构
      departs: [
        {
          name: '总裁办',
          manager: '曹操',
          children: [
            {
              name: '董事会',
              manager: '曹丕'
            }
          ]
        },
        {
          name: '行政部',
          manager: '刘备'
        },
        {
          name: '人事部',
          manager: '孙权'
        }
      ]
    }
  }
}
</script>

<style scoped>
.tree-card {
  padding: 30px 140px;
  font-size: 14px;
}
</style>

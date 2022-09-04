<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 组织架构头部内容 -->
      <el-card class="tree-card">
        <!-- 结构内容 -->
        <tree-tools :tree-node="company" :is-root="true" @addDepts="addDepts"></tree-tools>
        <!-- 树形结构 -->
        <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
          <!-- 传入插槽内容 -->
          <!-- 放置结构内容 -->
          <tree-tools slot-scope="{ data }" :tree-node="data" @delDepts="getDepartments" @addDepts="addDepts" @editDepts="editDepts"></tree-tools>
          <!-- /传入插槽内容 -->
        </el-tree>
      </el-card>
      <!-- /组织架构头部内容 -->
    </div>
    <!-- 放置新增弹层组件  -->
    <add-dept ref="addDept" :show-dialog.sync="showDialog" :tree-node="node" @addDepts="getDepartments" @changeDialog="test" />
  </div>
</template>

<script>
import TreeTools from './components/tree-tools.vue'
import { getDepartments } from '@/api/department'
import { tranListToTreeData } from '@/utils'
import AddDept from './components/add-dept.vue'
export default {
  components: {
    TreeTools,
    AddDept
  },
  data() {
    return {
      // 头部数据结构
      company: {},
      defaultProps: {
        label: 'name' // 从name显示内容
      },
      // 树形数据结构
      departs: [],
      showDialog: false, // 默认不显示窗体
      node: null // 记录当前点击node节点
    }
  },
  created() {
    this.getDepartments()
  },
  methods: {
    async getDepartments() {
      const result = await getDepartments()
      this.company = { name: result.companyName, manager: '负责人', id: '' }
      this.departs = tranListToTreeData(result.depts, '')
      console.log(result)
    },
    addDepts(node) {
      this.showDialog = true // 显示弹层
      // node是当前点击的部门应记录下来
      this.node = node
    },
    test(value) {
      this.showDialog = value
    },
    editDepts(node) {
      this.showDialog = true // 弹出层
      this.node = node // 赋值操作的节点
      this.$refs.addDept.getDepartDetail(node.id) // 直接调用子组件中的方法 传入一个id
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

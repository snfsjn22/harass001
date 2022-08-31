<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 组织架构头部内容 -->
      <el-card class="tree-card">
        <el-row type="flex" justify="space-between" align="middle" style="height: 40px">
          <el-col>
            <span>江苏传智播客教育科技股份有限公司</span>
          </el-col>
          <el-col :span="4">
            <el-row type="flex" justify="end">
              <!-- 两个内容 -->
              <el-col>负责人</el-col>
              <el-col>
                <!-- 下拉菜单 element -->
                <el-dropdown>
                  <span> 操作<i class="el-icon-arrow-down" /> </span>
                  <!-- 下拉菜单 -->
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>添加子部门</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <!-- 树形结构 -->
        <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
          <!-- 传入插槽内容 -->
          <!-- 放置结构内容 -->
          <el-row slot-scope="{ data }" type="flex" justify="space-between" align="middle" style="height: 40px; width: 100%">
            <el-col>
              <!-- 左侧内容 -->
              <span>{{ data.name }}</span>
              <!-- /左侧内容 -->
            </el-col>
            <el-col :span="4">
              <!-- 右侧内容 -->
              <el-row type="flex" justify="end">
                <el-col>{{ data.manager }}</el-col>
                <el-col>
                  <!-- 放置下拉菜单 -->
                  <el-dropdown>
                    <!-- 内容 -->
                    <span> 操作<i class="el-icon-arrow-down" /> </span>
                    <!-- 具名插槽 -->
                    <el-dropdown-menu slot="dropdown">
                      <!-- 下拉选项 -->
                      <el-dropdown-item>添加子部门</el-dropdown-item>
                      <el-dropdown-item>编辑部门</el-dropdown-item>
                      <el-dropdown-item>删除部门</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>
              <!-- /右侧内容 -->
            </el-col>
          </el-row>
          <!-- /传入插槽内容 -->
        </el-tree>
      </el-card>
      <!-- /组织架构头部内容 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultProps: {
        label: 'name' // 从name显示内容
      },
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

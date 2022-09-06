<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <!-- <page-tools :show-before="true">
      <template v-slot:before>
        <span>12123123</span>
      </template>
      <template v-slot:after>
        <el-button slot="after" type="primary">导入excel</el-button>
      </template>
    </page-tools> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

<template>
  <!-- 日历 -->
  <div>
    <el-row type="flex" justify="end">
      <!-- 年月 -->
      <el-select v-model="currentYear" size="small" style="width: 120px">
        <el-option v-for="item in yearList" :key="item" :label="item" :value="item">{{ item }}</el-option>
      </el-select>
      <el-select v-model="currentMonth" size="small" style="width: 120px; margin-left: 10px">
        <el-option v-for="item in 12" :key="item" :label="item" :value="item">{{ item }}</el-option>
      </el-select>
    </el-row>
    <!-- 日历组件 -->
    <el-calendar></el-calendar>
  </div>
</template>

<script>
export default {
  props: {
    startDate: {
      type: Date,
      default: () => new Date()
    }
  },
  data() {
    return {
      currentMonth: null, // 当前月份
      currentYear: null, // 当前年份
      currentDate: null,
      yearList: []
    }
  },
  created() {
    this.currentYear = this.startDate.getFullYear() // 得到当前年份
    this.yearList = Array.from(Array(11), (v, i) => this.currentYear + i - 5)
    this.currentMonth = this.startDate.getMonth() + 1 // 得到当前月份
  }
}
</script>

<style></style>

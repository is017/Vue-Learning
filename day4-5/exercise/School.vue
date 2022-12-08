<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称: {{schoolName}}</h2>
    <h2>学校地址: {{achoolAddress}}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码
export default {
  name: 'School',
  data() {
    return {
      schoolName: 'Vue',
      achoolAddress: 'yyx',
    }
  }
}
</script>

<style>
.deom {
  background-color: orange;
}
</style>
<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学生名称: {{name}}</h2>
    <h2>学生地址: {{address}}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码
export default {
  name: 'Student',
  data() {
    return {
      name: 'Vue',
      address: 'yyx',
    }
  }
}
</script>

<style>
.deom {
  background-color: orange;
}
</style>
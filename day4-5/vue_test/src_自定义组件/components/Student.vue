<template>
  <div class="student">
    <h2>学生：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前求和为: {{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  /**注册组件*/
  data() {
    return {
      name: "xg",
      sex: "女",
      number: 0,
    };
  },
  methods: {
    add() {
      console.log("add被调用");
      this.number++;
    },
    sendStudentName() {
      // 触发Student组件实例上的atguigu事件
      this.$emit("atguigu", this.name);
      this.$emit("demo");
    },
    unbind() {
      // this.$off("atguigu"); // 解绑一个事件
      this.$off(["atguigu", "demo"]);
    },
    death() {
      this.$destroy(); // 销毁当前Student组件的实例
    },
  },
};
</script>

<style lang="less" scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>

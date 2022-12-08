<template>
  <div class="student">
    <h2>学生：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生->老师</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  /**注册组件*/
  data() {
    return {
      name: "xg",
      sex: "女",
    };
  },
  methods: {
    sendStudentName() {
      pubsub.publish("hello", 666);
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>

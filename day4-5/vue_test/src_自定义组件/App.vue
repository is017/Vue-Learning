<template>
  <div id="app">
    <h1>{{ msg }}, 学生姓名是:{{ studentName }}</h1>
    <School :getSchoolName="getSchoolName" />
    <!-- 法1： 通过父组件给子组件绑定一个自定义事件实现：子传父 -->
    <Student @atguigu.once="getStudentName" @demo="m1" />

    <!-- 法2  -->
    <!-- <Student ref="student" /> -->
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "你好啊",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到", name);
    },
    getStudentName(name, ...params) {
      console.log(name, params);
      this.studentName = name;
    },
    m1() {
      console.log("demo被调用");
    },
  },
  mounted() {
    // this.$refs.student.$on("atguigu", this.getStudentName);
    // this.$refs.student.$once("atguigu", this.getStudentName);
  },
};
</script>

<style>
#app {
  background-color: gray;
  padding: 5px;
}
</style>

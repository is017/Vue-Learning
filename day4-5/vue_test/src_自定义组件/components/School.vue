<template>
  <div class="school">
    <h2>框架：{{ name | mySlice }}</h2>
    <h2>作者：{{ author }}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  /**注册组件*/
  props: ["getSchoolName"],
  data() {
    return {
      name: "Vue2.0",
      author: "yyx",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>

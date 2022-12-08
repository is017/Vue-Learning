<template>
  <div class="school">
    <h2>框架：{{ name }}</h2>
    <h2>作者：{{ author }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  /**注册组件*/
  data() {
    return {
      name: "Vue2.0",
      author: "yyx",
    };
  },
  mounted() {
    console.log("School", this);
    this.$bus.$on("hello", (data) => {
      console.log("i am", data);
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>

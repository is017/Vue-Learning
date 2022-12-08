<template>
  <div class="school">
    <h2>框架：{{ name }}</h2>
    <h2>作者：{{ author }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
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
    // console.log("School", this);
    // this.$bus.$on("hello", (data) => {
    //   console.log("i am", data);
    // });
    this.pubId = pubsub.subscribe("hello", (msgName, data) => {
      console.log("some people publish", msgName, data);
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>

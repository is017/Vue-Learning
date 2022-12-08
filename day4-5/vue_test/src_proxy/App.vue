<template>
  <div id="root">
    <button @click="getStudent">获取学生信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  methods: {
    getStudent() {
      axios.get("http://127.0.0.1:8080/jxc/gapp/cash/").then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
  },
};
</script>

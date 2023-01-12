<template>
  <div class="count">
    <h1>当前求和为:{{ sum }}</h1>
    <h3>放大10倍:{{ bigSum }}</h3>
    <h3>我在学习{{ subject }}的{{ framework }}框架</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      num: 1,
    };
  },
  computed: {
    ...mapState(["sum", "subject", "framework"]),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    ...mapMutations({
      increment: "UP",
      decrement: "DOWN",
    }),
    ...mapActions({
      incrementOdd: "upOdd",
      incrementWait: "up",
    }),
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>

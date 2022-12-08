<template>
  <ul class="todo-main">
    <transition-gruop name="todo" appear>
      <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
    </transition-gruop>
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  /**注册组件*/
  components: {
    MyItem,
  },
  props: ["todos"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

/* 进入的起点 */
.todo-enter,
.todo-leave-to {
  transform: translateX(-100%);
}

/* 进入的终点 */
.todo-enter-to,
.todo-leave {
  transform: translateX(0);
}

.todo-enter-active,
.todo-leave-active {
  transition: 0.5s linear;
}
</style>

<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from './School.vue';
import Student from './Student.vue';

export default {
  name: 'App',
  /**注册组件*/
  components: {
    School,
    Student
  },
}
</script>

<style>

</style>
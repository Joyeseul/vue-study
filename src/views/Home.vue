<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Hello-World msg="Wlcome to Your Vue.js World"></Hello-World>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

</style>

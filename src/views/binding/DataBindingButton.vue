<template>
  <div>
    <!-- 내용이 입력되어야만 클릭되는 버튼 -->
    <input type="text" v-model="textValue" />
    <button type="button" v-bind:disabled="textValue==''">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textValue: ''
    }
  },
  name: "DataBindingButton"
}
</script>

<style scoped>

</style>

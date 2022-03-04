<template>
  <div>
    <div>
      <button v-on:click="clickBtn">alert 발생</button>
    </div>
    <div>
      <button type="button" v-on:click="increaseCounter">Add 1</button>
      <button type="button" v-on:click="reset">reset</button>
      <p>The counter is : {{ count }}</p>
    </div>
    <div>
      <button type="button" v-on:click="one(), two()">Click</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventClick",
  data() {
    return {
      count: 0
    }
  },
  methods: {
    clickBtn: function () {
      alert('clicked');
    },
    increaseCounter(){
      this.counter =  this.counter + 1;
    },
    reset(){
      this.counter = 0
    },
    /* 여러개의 함수도 호출할 수 있다. */
    one(){
      alert('One');
    },
    two(){
      alert('Two');
    },
  },
}
</script>

<style scoped>

</style>

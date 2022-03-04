<template>
  <div>
    <h1 v-if="type=='A'">A출력</h1>
    <h1 v-else-if="type=='B'">B출력</h1>
    <h1 v-else>C출력</h1>
    <br>
    <h1 v-if="flag">Vue.js</h1>
    <button v-on:click="changeFlag">flag 값 변경</button>
  </div>
</template>

<script>
export default {
  data() {
    return{
      type: 'A',
      flag: true
    }
  },
  methods: {
    changeFlag: function () {
      /* this를 사용하면 컴포넌트 인스턴스를 참조할 수 있다.
      *   그리고 data는 $data로 받아올 수 있는데, 나중에는 data를 함수형으로 작성하는 게 좋다고 함.
      *   https://heewon26.tistory.com/223 */
      this.flag = !this.flag;

      /* 아래 내용을 37번 줄 처럼 간단히 simplify 할 수 있다!!
      if(this.$data.flag) {
          this.$data.flag = false;
      } else {
          this.$data.flag = true;
      }
      */
    }
  }
}
</script>

<style scoped>

</style>
<!-- v-if의 경우 조건이 만족하면 html 블록이 생성되고, 조건이 맞지않으면 아예 삭제 되는 형식 -->

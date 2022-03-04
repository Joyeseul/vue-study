<template>
  <!-- Vue 의 template 에 최상위 태그가 1개만 있어야 랜더가 가능하다. -->
  <!-- 에러발생 :
  <div>{{ message }}</div>>
  <div>{{ message2 }}</div> -->
  <div>
    <p>데이터는 {{}} 콧수염 태그로 바인딩할 수 있다.</p>
    <span>메시지1 : {{ message }} </span><br>
    <span v-once>메시지2 (v-once) : {{ message2 }}</span><br>
    <span>메시지2 : {{ message2 }} </span>
  </div>
</template>

<script>
export default {
  name: "DataBinding",
  data() {
    return {
      message : 'Hello Vue.js!',
      message2 : '화이팅!'
    }
  },
  beforeCreate() {
    console.log("beforeCreate DataBinding.vue");
  },
  created() {
    console.log("created DataBinding.vue");
  },
  mounted() {
    console.log("mounted DataBinding.vue");
    this.message2 = "공부해봅시다!"             //message 값 변경
  },
  updated() {
    console.log("updated DataBinding.vue");
  }
}
/* v-once : HTML 코드로 출력이 된 이후에 어떤 후처리가 있더라도, 처음에 출력한 값을 유지시킬 때 사용.
*           정적 콘텐츠가 많이 포함된 컴포넌트일 경우, 해당 <div>는 v-once로 캐시가 한번만 실행되도록 하면 비용이 적게든다. */
/* updated() : 라이프 사이클 혹은 뷰 인스턴스에서 데이터 변경이 일어나
  *           화면이 다시 그려졌을 때 호출되는 로직 */
</script>

<style scoped>

</style>

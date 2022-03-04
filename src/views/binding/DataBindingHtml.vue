<template>
  <div v-html="htmlString">
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlString: '<h1>good job! raw html!</h1>'
    };
  },
  name: "DataBindingHtml"
  /* v-html : 실제 HTML을 출력하고자 할 때 사용한다.
  *         만약 {{ htmlString }}으로 직접 넣으려고 한다면 일반 텍스트로 해석하여 출력될 것이다.
  *         이때 데이터 바인딩은 사용할 수 없다. (Vue는 문자열 기반 템플릿 엔진이 아니기 때문.
  *         주의!! 웹사이트에서 임의의 HTML을 동적으로 렌더링하려면 XSS 취약점으로 쉽게 이어질 수 있다.
  *               따라서 사용자가 제공한 콘텐츠에서는 절대 v-html 보간을 사용하면 안된다. */
}
</script>

<style scoped>

</style>

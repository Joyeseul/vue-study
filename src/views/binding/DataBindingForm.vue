<template>
  <div>
    <div>
      <input type="text" v-model="message1" placeholder="수정해보세요">
      <p>메시지1 : {{ message1 }}</p>
      <p>메시지1 reverse : {{ message1.split('').reverse().join('') }}</p><br>

      <input type="text" v-model.trim="messageTrim" placeholder="수정해보세요(자동trim)">
      <p>메시지2(trim) : {{ messageTrim }}</p>

      <p style="white-space: pre-line">여러 줄을 가지는 메시지 : {{ longMessage }}</p>
      <textarea v-model="longMessage" placeholder="여러줄을 입력해보세요"></textarea>
      <!-- <textarea>는 {{ longMessage }}로 표현할 수 없고, v-model만 사용가능하다 -->
    </div>
    <br>
    <hr>

    <input type="checkbox" id="checkbox" v-model="checked1">
    <label for="checkbox">{{ checked1 }}</label>
    <label><input type="checkbox" v-model="checked2" true-value="선택됨" false-value="해제됨">{{ checked2 }}</label>

    <div>
      <input type="checkbox" id="soccer" value="축구" v-model="checkedNames">
      <label for="soccer">축구</label>
      <input type="checkbox" id="baseball" value="야구" v-model="checkedNames">
      <label for="baseball">야구</label>
      <input type="checkbox" id="basketball" value="농구" v-model="checkedNames">
      <label for="basketball">농구</label>
      <br>
      <span>체크한 운동 : {{ checkedNames }}</span>
    </div>
    <br>
    <div>
      <input type="radio" id="one" value="첫째" v-model="picked">
      <label for="one">첫째</label>
      <input type="radio" id="two" value="둘째" v-model="picked">
      <label for="two">둘째</label>
      <br>
      <span>선택 : {{ picked }}</span>
    </div>
    <hr>
    <div>
      <select v-model="singleSelected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>singleSelected: {{ singleSelected }}</span>
      <br>
      <select v-model="multipleSelected" multiple>
        <option v-for="option in options" v-bind:value="option.value">{{ option.text }}</option>
      </select>
      <span>multipleSelected: {{ multipleSelected }}</span>
    </div>
    <hr>
    <div>
      <!-- 'pickedBind'는 선택시 문자열 'a' 입니다.-->
      <input type="radio" v-model="pickedBind" value="a">
      <span>값 바인딩 : {{ pickedBind }}</span>
      <br>
      <!-- 'true-value'와 'false-value'는 폼 전송시 'value' 속성에 영향을 미치지 않는다.
            만일 둘 중 한 값이 전송되길 원한다면 radio 버튼을 대신 사용하자. -->
      <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
    </div>
    <div>
      <p v-bind:id="idA">아이디 바인딩</p>
      <p v-bind:class="classA">클래스 바인딩</p>
      <p v-bind:style="styleA">스타일 바인딩</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "DataBindingForm",
  data() {
    return {
      message1: '',
      messageTrim: '',
      longMessage: '',
      checked1: false,     //문자열에 값 바인딩
      checked2: false,     //문자열이 아닌 값에 바인딩 가능
      checkedNames: [],
      picked: '',
      singleSelected: '',
      multipleSelected: [],
      options: [
        { text: 'One', value: 'A'},
        { text: 'Two', value: 'B'},
        { text: 'Three', value: 'C'},
      ],
      pickedBind: '',
      idA: 10,
      classA: 'container',
      styleA: 'color: blue'
    }
  }
}
/* v-model : 폼 input 과 앨리먼트에 양방향 데이터 바인딩을 생성할 수 있다.
*           모든 form 엘리먼트의 초기 'value', 'checked', 'selected' 속성을 무시한다.
*           항상 Vue 인스턴스 data()를 원본소스로 취급하기에, javascript 에서 초기값을 선언해야 한다.
* */
/* 1. <text>, <textarea> : value 속성, input 이벤트를 사용
*  2. checkbox, radio : checked 속성, change 이벤트를 사용
*  3. <select> : value 속성을 prop으로, change 를 이벤트로 사용
* */
</script>

<style scoped>

</style>

<template>
  <div>
    <div>
      <h3>캐디 배열 v-for 로 가져오기</h3>
      <button @click="pushNewCaddie">pushNewCaddie</button>
      <table>
        <thead>
        <tr>
          <th>회원번호</th>
          <th>캐디이름</th>
          <th>골프경력</th>
          <th>캐디경력</th>
          <th>예치금</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(caddie, i) in caddieList" :key="caddie.mem_idx" :id="caddie.mem_idx">
          <td>{{ caddie.mem_idx }}</td>
          <td>{{ caddie.mem_name }}</td>
          <td>{{ caddie.golf_career }}</td>
          <td>{{ caddie.caddie_career }}</td>
          <td>{{ caddie.deposit }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <hr>
    <br>
    <div>
      <h3>캐디 배열대체(filter() 사용)  -- 에러 발생...</h3>
      <table>
        <thead>
        <tr>
          <th>회원번호</th>
          <th>캐디이름</th>
          <th>골프경력</th>
          <th>캐디경력</th>
          <th>예치금</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(caddie, i) in caddieListFilter" :key="caddie.mem_idx">
          <td>{{ caddie.mem_idx }}</td>
          <td>{{ caddie.mem_name }}</td>
          <td>{{ caddie.golf_career }}</td>
          <td>{{ caddie.caddie_career }}</td>
          <td>{{ caddie.deposit }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <hr>
    <br>
    <div>
      <h3>책 객체를 v-for 로 가져오기</h3>
      <div v-for="(value, name, index) in bookObj">
        {{ index }}. {{ name }}: {{ value }}
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "DataBindingList",
  data() {
    return {
      caddieList: [
        {"mem_idx": "id001", "mem_name": "유관순", "golf_career": 1, "caddie_career": 2, "deposit": 300000},
        {"mem_idx": "id002", "mem_name": "홍길동", "golf_career": 2, "caddie_career": 0, "deposit": 400000},
        {"mem_idx": "id003", "mem_name": "황진이", "golf_career": 3, "caddie_career": 4, "deposit": 80000},
        {"mem_idx": "id004", "mem_name": "윤봉길", "golf_career": 4, "caddie_career": 1, "deposit": 50000},
        {"mem_idx": "id005", "mem_name": "김마리아", "golf_career": 5, "caddie_career": 1, "deposit": 100000},
      ],
      bookObj: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10',
        url: 'https://kr.vuejs.org/v2/guide/list.html#v-for%EB%A1%9C-%EC%97%98%EB%A6%AC%EB%A8%BC%ED%8A%B8%EC%97%90-%EB%B0%B0%EC%97%B4-%EB%A7%A4%ED%95%91%ED%95%98%EA%B8%B0'
      },
    }
  },
  mounted() {
    this.$set( this.bookObj, 'subAuthor', 'John Doe' );
  },
  methods: {
    pushNewCaddie: function () {
      this.caddieList.push(
        {"mem_idx":"id006", "mem_name":"이봉창", "golf_career":1, "caddie_career":2, "deposit":70000}
      )
    },
  },
  // computed: {
  //   caddieListFilter: function () {
  //     return this.caddieList.filter(function (caddie) {
  //       return caddie.caddie_career.match(1);
  //     })
  //   }
  // }
}
/* v-for : 배열을 기반으로 list 를 랜더링 할 수 있다. 'item in items' 형태의 문법으로 기술한다. (in 대신 of도 가능)
*         두번째 전달인자로 index 를 넘길 수도 있다. */
/* 배열 변경감시 : Vue는 감시중인 배열의 변이 메소드를 래핑하여 뷰 갱신을 triger 한다.
*         push(), pop(), shift(), unshift(), splice(), sort(), reverse() 가 가능하다.
* 객체 변경감지 : Vue는 이미 만들어진 인스턴스에 새로운 루트레벨의 반응형 속성을 동적으로 추가하는 걸 허용하지 않는다.
*         대신 this.$set(object명, 속성명, 값) 으로 객체에 반응형 속성을 추가할 수 있다.
* */
/* v-for 와 v-if 를 동시에 사용하는 것은 추천하지 않는다.
* 동일 노드에 두 가지가 모두 있다면, v-for 가 v-if 보다 높은 우선순위를 가진다. */
/* :key= : "여러 엘리먼트들이 완전히 별개이므로 다시 사용하지 말라"는 메시지를 줄 때 유용하다. 유일한 값을 사용해야 한다.
*        key 를 사용하면 하위 컴포넌트로 값을 넘겨줄 때도(props, v-model 등) 데이터를 반응형으로 넘겨줄 수 있다. */
/* TODO :: v-for, 변경감지, 필터링 등은 중요한 것 같으니 더 자세히 봐야겠다. */
</script>

<style scoped>
  table{
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td,th{
    border: 1px solid black;
    text-align: left;
    padding: 8px;
  }
</style>

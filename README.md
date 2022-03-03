# vue-study

> 배운 내용을 활용하여 Vue의 여러가지 기능을 사용하는 것이 목적입니다.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Router 로 화면 전환하는 방법
``` bash
# component.vue 파일들
사용될 Component 들을 정의한다.

# index.js
router 와 route를 정의한다.
- router : URL 과 Component 를 연결해준다.
      사용자의 요청에 맞는 페이지를 보여주는 중개역할을 한다.
- route : path(URL), name(뷰이름), component를 설정한다.

# App.vue
route 표시 위치를 선정해준다.
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

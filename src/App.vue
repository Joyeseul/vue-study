<template>
  <div id="app">
    <!-- 해당 페이지로 이동하는 네비 부분 -->
    <div id="nav">
      <router-link to="/">Home</router-link>||
      <router-link to="/about">About</router-link>||
      <router-link to="/databinding">DataBinding</router-link>||
      <router-link to="/databindinghtml">DataBindingHtml</router-link>||
      <router-link to="/databindingform">DataBindingForm</router-link>||
      <router-link to="/databindingattribute">DataBindingAttribute</router-link>||
      <router-link to="/databindingbutton">DataBindingButton</router-link>||
      <router-link to="/databindingclass">DataBindingClass</router-link> ||
      <router-link to="/databindingclass2">DataBindingClass2</router-link> ||
      <router-link to="/databindinglist01">DataBindingList01</router-link>||
      <br>
      <br>
      <router-link to="/renderingvif">RenderingVIf</router-link>||
      <router-link to="/renderingvshow">RenderingVShow</router-link>||
      <br>
      <br>
      <router-link to="/eventclick">EventClick</router-link>||
      <router-link to="/eventchange">EventChange</router-link> ||
      <router-link to="/eventkey">EventKey</router-link>
    </div>
    <br>
    <hr>

    <!-- 선택한 페이지를 렌더링해서 보여주는 부분 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

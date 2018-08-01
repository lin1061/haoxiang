<template>
  <div id="app">
    <router-view/>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    })
  }
}
</script>

<style lang="less">
@import './assets/css/common.less';
body{
  background: #f5f5f5;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  margin: 0;           /*  body-8px */
  padding: 0;
  text-decoration-line: none ;
  font-style: normal;
  list-style: none;
  -webkit-tap-highlight-color:rgba(0,0,0,0) ;
  box-sizing: border-box;
}
img{
  width: 25%;
  border: 0;
  display: inline-block;
}
</style>

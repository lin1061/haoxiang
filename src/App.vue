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
  font-size:0.20rem;
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
a{
  border:none;
  border-color: #fff;
  text-decoration: none;
}

.clearfix:after
{
  content:".";
  display:block;
  height:0;
  visibility:hidden;
  clear:both;
}
.clearfix {
  zoom:1;
  display:block;
  clear:both;
}
img{
  width: 100%;
  border: 0;
  display: inline-block;
}
</style>

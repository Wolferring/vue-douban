<template>
  <div class="wrap">
    <com-header :com="comConf"></com-header>
    <div class="container">
      <transition :name="transitionName"> 
        <router-view class="child-view" />
      </transition>
    </div>
    <com-tabbar />
    <com-loading :loading="loading"></com-loading>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import tabbar from './components/tabbar.vue'
import header from './components/header.vue'
import loading from './components/loading'
import './assets/less/style.less';
export default {
  name:'App',
  data(){
    return {
      transitionName:'fadeIn'
    }
  },
  created:function(){
    if(this.$route.name == undefined){
      return this.$router.push('home')
    }
  },
  computed:mapGetters({
    comConf:'comConf',
    loading:'loading'
  }),  
  components:{
    comTabbar:tabbar,
    comHeader:header,
    comLoading:loading
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft Yahei Light','Microsoft Yahei','verdana','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.child-view{
  width: 100%;
  transition: all .2s cubic-bezier(.55,0,.1,1);
}
.fadeIn-enter{
  opacity: 0;
}
.fadeIn-leave-active{
  display: none;
}
.slide-left-enter{
    opacity: 0;
    transform: translate(0px,0);
}
.slide-left-leave-active{
    opacity: 0;
    transform: translate(0px 0);
}
</style>

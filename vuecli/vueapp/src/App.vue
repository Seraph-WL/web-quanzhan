<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/page1">Page1</router-link> |
      <router-link to="/page2">Page2</router-link> |
      <router-link to="/page3">Page3</router-link> |
      <router-link to="/aboutpage">别名</router-link> |
      <router-link to="/backhome">返回首页</router-link> |
      <span @click="goPage1">编程式导航-page1</span> |
      <span @click="goBack">返回</span> ｜
      <span @click="goFoward">向前</span>
    </div>
    <div class="box">
      <!-- transition:进入离开过渡组件 -->
      <transition name="fade">
        <router-view></router-view>
        
      </transition>
    </div>
    
   
  </div>
</template>
<script>
export default {
  methods:{
    goPage1(){
      this.$router.push("/page1")
    },
    // 后退
    goBack(){
      this.$router.go(-1);
    },
    // 前进
    goFoward(){
      this.$router.go(1);
    }
  }
}
</script>
<style>
*{
  margin:0;
  padding:0;
}
.box{
  position: relative;
}
/* 定义进入过渡的开始状态 */
.fade-enter{
  /* 位移 */
  transform: translateX(100%);
}
/* 定义进入过渡生效时的状态 */
.fade-enter-active{
  width: 100%;
  position: absolute;
  top:0;
  transition: all 1s linear;
  /* linear:线性 */
}
/* 定义进入过渡的结束状态 */
.fade-enter-to{
  transform: translateX(0);
}
/* 定义离开过渡的开始状态 */
.fade-leave{
  transform: translateX(0);
}
/* 定义离开过渡生效时的状态 */
.fade-leave-active{
  width: 100%;
  position: absolute;
  top:0;
  transition: all 1s linear;
}
/* 定义离开过渡的结束状态 */
.fade-leave-to{
  transform: translateX(-100%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

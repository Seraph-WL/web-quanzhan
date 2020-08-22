<template>
  <div>
    <h1>子页面二</h1>
    <h2>{{$route.params.name}}</h2>
    <h3>vuex-str为:{{$store.state.str}}</h3>
    <!-- <h4>vuex-str为:{{storeStr}}</h4> -->
    <h4>vuex-str为:{{str}}</h4>

  </div>
</template>
<script>
// 通过mapstate的对象来赋值
import {mapState} from 'vuex'
export default {
  created(){
    console.log(this.$route.params.name);
    console.log(this.$store.state.str);
    
  },
  // state访问状态对象
  // 通过computed计算属性直接赋值
  // computed: {
  //   storeStr(){
  //     return this.$store.state.str
  //   }
  // },
  // 通过mapstate的数组来赋值
  computed: mapState(["str"])
}
</script>
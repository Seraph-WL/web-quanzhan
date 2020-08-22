<template>
  <div>
    <h1 class="active">hello world {{num}}</h1>
    <button @click="addHandle">add</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      str:"fellow41",
      num:0
    }
  },
  methods: {
    addHandle(){
      ++this.num
    }
  },
  // 路由钩子函数
  // beforeRouteEnter：在路由进入前的钩子函数。
  // beforeRouteLeave：在路由离开前的钩子函数。
  // 你可以 在 beforeRouteLeave 中直接访问 this。这个 leave 钩子通常用来禁止用户在还未保存修改前突然离开。
  // 可以通过 next(false) 来取消导航。同时注意必须有这个next()，相当于一个按钮开启一样。
  beforeRouteEnter (to, from, next) {
    console.log(to,from)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log(to,from)
    next()
  }
}
</script>
<!--scoped:只在该页面生效-->
<style scoped>
  .active{
    color:red;
  }
</style>
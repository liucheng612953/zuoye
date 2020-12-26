<template>
  <div id="app">
         <div >
          常用表情列表
          <span  v-for="(i , index) in array" :key="index" >-{{i}}-</span>
        </div>
        <div >
          表情列表
          <button @click="dian(i)" v-for="(i,index) in arr" :key="index">{{i}}</button>
        </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
   data() {
      return {
        arr:["微笑","大笑","哭泣","愤怒","伤心","拜拜"],
        array:["微笑","大笑","哭泣","愤怒","伤心","拜拜"]
      }
   },
    methods: {
      dian(e){
        this.array=this.array.filter((i)=>{
          return !(e==i)
        })
        this.array.unshift(e)
      }
    }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

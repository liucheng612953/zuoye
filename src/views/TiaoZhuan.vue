<template>
  <div id="app">
    <div>
      常用列表：
      <span v-for="(i,index) in array" :key="index">{{" "+i+" "}}</span>
    </div>
    <div>
      表情列表
      <button @click="btn(i)" v-for="(i,index) in arr" :key="index">{{i}}</button>
    </div>
    <div @click="gotoPach('Child1')">Child1</div>
    <div @click="gotoPach('Child2')">Child2</div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      arr:["笑","哭","怒","喜","哀"],
      array:["笑","哭","怒","喜","哀"]
    }
  },
  methods: {
    btn(e){
      this.array=this.array.filter((i)=>{
        return !(e==i)
      })
      this.array.unshift(e)
    },
    gotoPach(str){
            const userId = "123"
            this.$router.push({name : str , params: {userId}});
        // this.$router.push(str)
    }

  },
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

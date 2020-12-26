<template>
  <div id="app">
    <div>
      姓名<input type="text"  v-model="tian" >
      身高<input type="text"  v-model="xgao" >
      <button @click="tianjia">添加</button> 
    </div>
    <div class="overall">
      <div v-for="i in arr" :key="i.index">
      <div class="locality" :style="{'height':i.gao+'px','background-color':'#f40'}" >{{i.gao}}</div>
      <div>{{i.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      tian:"",
      xgao:0,
      arr:[
        {
          name:"小明",
          gao:150
      },
        {
          name:"小红",
          gao:180
      },
      ]
    }
  },
  methods: {
    tianjia(){
      let xin={
        name:this.tian,
        gao:this.xgao
      }
      this.arr.push(xin);
    }
  },
}
</script>

<style>
.overall{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  width: auto;
  height: auto;
}
.locality{
width: 30px;
height: 200px;
background: cornflowerblue;
margin-left: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
    <div class="Circle">
        <div class="Circle-top">
            <div class="top-one">
                <div class="one-one"></div>
                <div class="one-two">
                    <button @click="xiang">相机</button>
                </div>
            </div>
            <div class="top-two">
                刘刘
            </div>
            <div class="top-three"></div>
        </div>
        <div class="Cricle-two" v-for="(i,index) in arr" :key="index">
            <div class="two-one">
                <div class="two-one-one">{{i.photo}}</div>
                <div class="two-one-two">{{i.title}}</div>
            </div>
            <div class="two-two">{{i.cont}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                arr:[
                    {
                        photo:" ",
                        title:"我是标题1",
                        cont:"我是内容1"
                    },
                    {
                        photo:" ",
                        title:"我是标题2",
                        cont:"我是内容2"
                    },
                ]
            }
        },
        methods: {
            xiang(){
                let that=this
                that.$router.push({path:'/FaBiao'})
                const fbinput = this.$route.query.inp
                let shuju={
                    photo:" ",
                    title:fbinput,
                    cont:"我是内容"
                }
                this.arr.unshift(shuju)
            }
        },
    }
</script>

<style>
    .Circle{
        width: 400px;
        height: 900px;
        border: darkgray 1px solid;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .Circle-top{
        width: 400px;
        height: 200px;
        background: rgb(109, 244, 247);
       
    }
    .top-one{
        width: 400px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .one-one{
        width: 30px;
        height: 30px;
        background: darkmagenta;
        border-radius: 10%;
    }
    .top-two{
        margin: 120px 0px 0px 200px;
        color: floralwhite;
    }
    .top-three{
        width: 40px;
        height: 40px;
        background: dimgray;
        margin: -20px 0px 0px 330px;
        border-radius: 10px;
    }
    .Cricle-two{
        width: 400px;
        height: 200px;
        margin: 20px 0px 0px 0px;
        background: fuchsia;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .two-one{
        width: 400px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .two-one-one{
        width: 30px;
        height: 30px;
        background: cornflowerblue;
        margin: 0px 0px 0px 10px;
        border-radius: 10%;
    }
    .two-one-two{
        font-size: 20px;
        margin: 0px 0px 0px 10px;
    }
    .two-two{
        margin: 0px 0px 0px 50px;
    }
</style>
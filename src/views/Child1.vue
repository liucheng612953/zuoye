<template>
    <div>
       我是第一个child1
       <button @click="canshu">获取参数</button>
    </div>
</template>

<script>
    export default {
       
       
       methods: {
        canshu(){
            console.log(this.$route.params.userId)
        }
    },
    }
    
</script>

<style lang="scss" scoped>

</style>
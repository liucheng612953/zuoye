<template>
    <div class="fabiao">
        <div class="fabiao-one">
            <button @click="fab('Circle')"></button>
            <input type="text" v-model="inpt">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            fab(url){
                 this.$router.push({path: url,query:{inp:inpt}})
            }
        },
    }
</script>

<style>
    .fabiao{
        width: 400px;
        height: 600px;
        background: cornflowerblue;
        border: darkgray 1px solid;
    }

</style>
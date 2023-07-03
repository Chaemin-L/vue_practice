<template>
    <div id="navigation-bar">        
        <div class="navigation-link" v-for="tab of tabList" :key="tab.url"><router-link :to="tab.url">{{tab.name}}</router-link></div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const tabList = ref([
    {url:"home", name:"홈"}, 
    {url: "products", name:"상품"},
    {url: "transaction", name:"거래내역"},
    {url: 'refund', name:"환불내역"}]);

</script>

<style scoped>
#navigation-bar{
    display: grid;
    grid-auto-flow: column;
}
.navigation-link{
    height: 40px;
    display: flex;
    margin: 0;
    padding: 0;
    background-color: lightblue;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.navigation-link:hover{
    background-color: beige;
    cursor: pointer;
}
a {
    width: 100%;
    height: 40px;
    display: flex;
    text-decoration: none;
    color: black;
    align-items: center;
    justify-content: center;
}
a:active{
    color: blue;
}
</style>
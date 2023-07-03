<template>
    <h2>거래내역 페이지</h2>
    <div  v-for="transaction of transactionList" :key="transaction.id" >
        <card-view>
            <div>
                {{transaction.date}} {{ transaction.sum }}
            </div>
            <div v-for="item of transaction.items" :key="item.id">
                <strong>{{item.name}}</strong>
                {{item.num}}
            </div>
        

        </card-view>
    </div>
</template>

<script setup>
import CardView from '../../common/CardView.vue';

const transactionList = JSON.parse(localStorage.getItem('transaction'))||[];




</script>

<style scoped>
h2{
    margin: 0;
}
</style>
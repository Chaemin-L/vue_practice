<template>
    <h2>거래내역 페이지</h2>
    <card-view class="transaction-card__container" v-for="transaction of shortenDateTransactions" :key="transaction.id">
        <div class="transaction-card__container">
            <div>
                {{transaction.date}}
            </div>
            <div>
                <div class="transaction-card__list" v-for="item of transaction.items" :key="item.id">
                    <strong>{{item.name}}</strong>
                    {{item.num}}개
                </div>
            </div>
            <div>
                {{ transaction.sum }}원
            </div>
        </div>
    </card-view>
</template>

<script setup>
import CardView from '../../common/CardView.vue';
import {toRef, computed} from 'vue';

const transactionList = toRef(JSON.parse(localStorage.getItem('transaction'))||[]);

const shortenDateTransactions = computed(()=>{
    return transactionList.value.map(trans=>({...trans, date:trans.date.slice(0,10)}));
})




</script>

<style scoped>
.transaction-card__container{
    width: 90%;
    display: flex;
    padding: 10px 20px !important;
    background-color: lightsalmon;
    justify-content: space-between;
    align-items: center;
}
.transaction-card__list{
    display: flex;
    min-width: 130px;
    justify-content: space-between;
}
h2{
    margin: 0;
}
</style>
<template>
    <h2>상품 목록 페이지</h2>
    <card-view class="product-card__container" v-for="item of itemList" :key="item.id" @click="onClick(item)">
        <strong>{{item.name}}</strong>{{ item.price }}원
    </card-view>
    <div>
        <h4>장바구니 내역</h4>
        <ul>
            <li v-for="item of selectedList" :key="item.id">{{ item.name }} - {{ item.num }}</li>
        </ul>
    </div>
    <button @click="onPay">{{sum}}원 결제하기</button>
</template>
<script setup>
import {ref} from 'vue';
import { itemList } from '../dummyData';
import CardView from '../../common/CardView.vue';

const sum = ref(0);
const selectedList = ref([]);

const onClick = (item) => {
    const selectedItem = selectedList.value.find(select=>select.id===item.id);
    if(selectedItem===undefined){
        selectedList.value.push({...item, num: 1});
    }
    else{
        selectedItem.num+=1;
    }
    sum.value+=item.price;
}

const onPay = () => {
    if(sum.value===0) {
        alert('상품을 담은 후 결제해주세요');
    }
    else{
        console.log(`총 ${sum.value}원 결제!`);
        const transactionList = JSON.parse(localStorage.getItem('transaction'))||[];
        console.log(transactionList);
        transactionList?.push({date: new Date().toISOString(), sum:sum.value, items: selectedList.value});     
          
        localStorage.setItem('transaction', JSON.stringify(transactionList));

        sum.value = 0;
        selectedList.value = [];
    }
};

</script>
<style scoped>
h2{
    margin: 0;
}
.product-card__container{
    background-color: pink;
}
div{
    display: grid;
}
ul{
    padding: 0;
    list-style: none;
    text-align: center;
}
button{
    border: 0;
    width: 100%;
    height: 50px;
    border-radius: 20px;
}
button:active{
    background-color: darkgray;
}
</style>
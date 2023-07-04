<template>
    <header>
        <h2>LOGO</h2>
        <div v-show="isValidEmail" @click="onLogout">로그아웃</div>
    </header>
</template>

<script setup>
import {computed} from 'vue';
import {useRouter} from 'vue-router';
import { useLoginStore } from '@/store/store';

const router = useRouter();
const store = useLoginStore();
const isValidEmail = computed(()=>store.isValidEmail);

const onLogout = () => {
    store.logout();
    router.push({name: 'home'});
}

</script>

<style scoped>

header{
    height: 100px;
    display: flex;
    padding: 0 50px;
    background-color: gray;
    justify-content: space-between;
    align-items: center;
}
header h2{
    font-size: 30px;
}
header div{
    padding: 5px;
    border-radius: 10px;
    background-color: #efefef;
    color: slateblue;
}
</style>
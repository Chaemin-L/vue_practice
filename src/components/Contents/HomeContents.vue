<template>
    <div>
        <h2>홈 페이지</h2>
        <div>
            <!-- 로그인이 됐다면 사라짐 -->
            <div v-show="!isValidEmail">
                <h4>로그인</h4>
                <div>
                    <input type="text" v-model="idInput">
                    <input type="password" v-model="pwInput">
                </div>
                <div>
                    <button @click="login(idInput, pwInput)">로그인</button>
                    <button @click="logout">로그아웃</button>
                </div>
            </div>
            <div>
                <h4>전역 상태</h4>
                <div>이메일 <strong>{{ globalEmailValue }}</strong></div>
                <div>비밀번호 <strong>{{ globalPasswordValue }}</strong></div>
                <div v-show="isValidEmail">
                    <span><strong>{{ getNickname }}</strong>님! 반갑습니다. </span>
                    <span>3초 후 상품 페이지로 이동합니다. </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, computed, watch} from 'vue';
import {useLoginStore} from '../../store/store';
import {useRouter} from 'vue-router';
import {storeToRefs} from 'pinia'

const router = useRouter();

const idInput = ref(null);
const pwInput = ref(null);

const store = useLoginStore();
const globalEmailValue = computed(()=>store.email);
const globalPasswordValue = computed(()=>store.password);
const {isValidEmail, getNickname} = storeToRefs(store);
const {login, logout} = store; 

//이메일 검증 후, 상품 페이지로 이동
watch(isValidEmail, ()=>{
    if(isValidEmail) {
        setTimeout(()=>{
            router.push('/products')
        }, 3000);
    }
});

</script>

<style scoped>
h2{
    margin: 0;
}
</style>
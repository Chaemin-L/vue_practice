import {defineStore} from 'pinia';

export const useLoadingStore = defineStore('loading', {
    state: () => ({
        data: null,
        loading: false,
        error: false,
    }),
    getters: {
        loadData: (state) => state.data,
    },
    actions: {
        wait() {
            this.loading = true;
        },
        success(data){
            this.loading = false;
            this.data = data;
        },
        catch(){
            this.error = true;
        },
        clear(){
            this.data = null;
            this.loading = false;
            this.error = false;
        }
    }
});

export const useLoginStore = defineStore('login', {
    state: () => ({
        email: '',
        password: ''
    }),
    getters: {
        isValidEmail: (state) => {
            if(state.email==="") return false;
            const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return pattern.test(state.email);
        },
        getNickname:(state)=>{
            if(state.email.indexOf('@')===-1) return false;
            const endOfNickname = state.email.indexOf('@');
            return state.email.slice(0, endOfNickname);
        }
    },
    actions: {
        login(email, password){
            this.email = email;
            this.password = password;
        },
        logout(){
            this.email = "";
            this.password = "";
        }
    }
})
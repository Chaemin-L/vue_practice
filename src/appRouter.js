import { createRouter, createWebHistory } from 'vue-router';
import HomeContents from './components/Contents/HomeContents.vue';
import ProductsContents from './components/Contents/ProductsContents.vue';
import TransactionContents from './components/Contents/TransactionContents.vue';
import RefundContents from './components/Contents/RefundContents.vue';
import { useLoginStore } from './store/store';


export const appRouter = createRouter({
    history: createWebHistory(),
    routes:[
        {   path: "/", 
            name:"home", 
            component:HomeContents, 
            beforeEnter:(_, _2, next)=>{
                const {isValidEmail} = useLoginStore();
                if(isValidEmail) next({name: 'products'});
                return next();
            }
        },
        {path: "/products", name:"products", component:ProductsContents},
        {path: "/transaction", name:"transaction", component:TransactionContents},
        {path: "/refund", name:"refund", component:RefundContents},
    ],
});
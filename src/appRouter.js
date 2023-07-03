import { createRouter, createWebHistory } from 'vue-router';
import HomeContents from './components/Contents/HomeContents.vue';
import ProductsContents from './components/Contents/ProductsContents.vue';
import TransactionContents from './components/Contents/TransactionContents.vue';
import RefundContents from './components/Contents/RefundContents.vue';

export const appRouter = createRouter({
    history: createWebHistory(),
    routes:[
        {path: "/", redirect:"/home"},
        {path: "/home", name:"home", component:HomeContents},
        {path: "/products", name:"products", component:ProductsContents},
        {path: "/transaction", name:"transaction", component:TransactionContents},
        {path: "/refund", name:"refund", component:RefundContents},
    ]
});
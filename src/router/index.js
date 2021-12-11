import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue';
import Product from '@/components/Product.vue';
import NewProduct from '@/components/NewProduct.vue';
import ProductReview from '@/components/ProductReview.vue';
import ServiceCenter from '@/components/ServiceCenter.vue';


const routes = [
  { path:'/home', name:"Home", component:Home },
  { path:"/",  redirect : '/home' },
  { path:'/product', name:"Product", component:Product },
  { path:'/newproduct', name:"NewProduct", component:NewProduct },
  { path:'/productreview', name:"ProductReview", component:ProductReview },
  { path:'/servicecenter', name:"ServiceCenter", component:ServiceCenter },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

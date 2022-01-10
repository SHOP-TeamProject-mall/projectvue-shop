import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue';
import Product from '@/components/Product.vue';
import NewProduct from '@/components/NewProduct.vue';
import ProductReview from '@/components/ProductReview.vue';
import ServiceCenter from '@/components/ServiceCenter.vue';
import Join from '@/components/Join.vue';
import Login from '@/components/Login.vue';
import Admin from '@/components/Admin.vue';
import Mypage from '@/components/Mypage.vue';
import Logout from '@/components/Logout.vue';
import Order from '@/components/Order.vue';
import Order_Complete from '@/components/Order_Complete.vue';

const routes = [
  { path:'/home', name:"Home", component:Home },
  { path:"/",  redirect : '/home' },
  { path:'/product', name:"Product", component:Product },
  { path:'/newproduct', name:"NewProduct", component:NewProduct },
  { path:'/productreview', name:"ProductReview", component:ProductReview },
  { path:'/servicecenter', name:"ServiceCenter", component:ServiceCenter },
  { path:'/join', name:"Join", component:Join },
  { path:'/login', name:"Login", component:Login },
  { path:'/admin', name:"Admin", component:Admin },
  { path:'/mypage', name:"Mypage", component:Mypage },
  { path:'/logout', name:"Logout", component:Logout },
  { path:'/order', name:"Order", component:Order },
  { path:'/order_complete', name:"Order_Complete", component:Order_Complete },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

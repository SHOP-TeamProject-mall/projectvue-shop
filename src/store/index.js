// import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    list : [],
    totalprice : 0,
    cost : 0,
    salecost : 0,
    // menu1 :1,
    // == 주문 ==
    orderidx : "",
    userid : ""
  },

  getters: {
    getList(state) {
      return state.list;
    },
    getPrice(state){
      return state.totalprice;
    },
    getCost(state){
      return state.cost;
    },
    getSalecost(state){
      return state.salecost;
    },
    getOrderidx(state){
      return state.orderidx;
    },
    getUserid(state){
      return state.userid;
    }
  },
  mutations: {
    setList(state, payload) {
      state.list = payload;
    },
    setPrice(state, payload){
      state.totalprice = payload;
    },
    setCost(state, payload){
      state.cost = payload;
    },
    setSalecost(state, payload){
      state.salecost = payload;
    },
    setOrderidx(state, payload){
      state.orderidx = payload;
    },
    setUserid(state, payload){
      state.userid = payload;
    }
  },
  actions:{
    // SETproduct(context){
    //   return axios.get('127.0.0.1:9090/product?menu=1').then(response => context.commit('setData',response));
    // }
  }
});
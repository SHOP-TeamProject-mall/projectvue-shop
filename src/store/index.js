// import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    list : [],
    // menu1 :1,
  },

  getters: {
    getList(state) {
      return state.list;
    }
  },
  mutations: {
    setList(state, payload) {
      state.list = payload;
    }
  },
  actions:{
    // SETproduct(context){
    //   return axios.get('127.0.0.1:9090/product?menu=1').then(response => context.commit('setData',response));
    // }
  }
});
// import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    menu : 1,
    // menu1 :1,
  },

  getters: {
    getMenu(state) {
      return state.menu;
    }
  },
  mutations: {
    setMenu(state, menu) {
      state.menu = menu;
    }
  },
  actions:{
    // SETproduct(context){
    //   return axios.get('127.0.0.1:9090/product?menu=1').then(response => context.commit('setData',response));
    // }
  }
});
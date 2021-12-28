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
    setMenu(state, value) {
      state.menu = value;
    }
  }
});
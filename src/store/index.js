import { createStore } from "vuex";
import { user } from "./modules/user.js";

export default createStore({
  modules: {
    user,
  },
  state: () => ({
    isAuth: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token"), // token string or null
  }),
  getters: {
    checkAuth: (state) => state.isAuth,
  },
  mutations: {
    setIsAuth: (state, boolean) => (state.isAuth, boolean),
  },
  actions: {},
});

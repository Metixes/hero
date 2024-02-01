import { createStore } from "vuex";
import { user } from "./modules/user.js";

export default createStore({
  modules: {
    user,
  },
  state: () => ({
    isAuth: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token"), // token string or null

    applicationLoaded: false,
  }),
  getters: {
    checkAuth: (state) => state.isAuth,
    checkAppLoaded: (state) => state.isAppLoaded,
  },
  mutations: {
    setIsAuth: (state, boolean) => (state.isAuth, boolean),
    setAppLoaded: (state, boolean) => (state.applicationLoaded = boolean),
  },
  actions: {},
});

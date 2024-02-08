import { createStore } from "vuex";
import { user } from "./modules/user.js";

export default createStore({
  modules: {
    user,
  },
  state: () => ({
    isAuth: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token"), // token string or null

    //? is using?
    applicationLoaded: false,

    //can be Audio or Text. Default Text, need for HwHelper
    chatResponseType: localStorage.getItem("chatResponseType") || "Text",
  }),
  getters: {
    checkAuth: (state) => state.isAuth,
    checkAppLoaded: (state) => state.isAppLoaded,
    getResponseType: (state) => state.chatResponseType,
  },
  mutations: {
    setIsAuth: (state, boolean) => (state.isAuth = boolean),
    setAppLoaded: (state, boolean) => (state.applicationLoaded = boolean),
    setToken: (state, string) => (state.token = string),
    setChatResponseType: (state, string) => {
      state.chatResponseType = string;
      localStorage.setItem("chatResponseType", string);
    },
  },
  actions: {},
});

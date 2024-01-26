import { createStore } from "vuex";
import request from "@/utils/request";
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
export default createStore({
  state: {
    userData: {},
  },
  // getters: {},
  mutations: {
    setUserData: (state, object) => (state.userData, object),
  },
  actions: {
    async sendUserData({}, userData) {
      // try {
      //   const { data } = await request.post("auth", userData);

      //   if (data.error) {
      //     console.log(data.error.message);
      //   }

      //   commit("setUserData", data);
      // } catch (error) {
      //   console.log("error");
      // }
      notify({ type: "success", title: "Success" });
    },
  },
  modules: {},
});

import { notify } from "@kyvg/vue3-notification";
import request from "@/config/request";

export const user = {
  namespaced: true,
  state: () => ({
    userData: {
      first_name: "",
      last_name: "",
      class_code: "",
      school_code: "",
      school_name: "",
      school_year: "",
      rating: {
        rating: 0,
        starts: 0,
      },
    },
    isLoaded: false,
    isTasksCompleted: false,
    userTasks: [],
    userAnswers: [{ value: "" }],
    userStoryAnswer: "",
    showMenu: true,
  }),

  getters: {
    getFullName: (state) =>
      state.userData.first_name + " " + state.userData.last_name,
  },

  mutations: {
    setUserData: (state, object) => (state.userData = object),
    setShowMenu: (state, boolean) => (state.showMenu = boolean),
    setIsLoaded: (state, boolean) => (state.isLoaded = boolean),
    setUserTasks: (state, array) => (state.userTasks = array),
    setUserAnswers: (state, array) => (state.userAnswers = array),
    setUserStoryAnswer: (state, string) => (state.userStoryAnswer = string),
    setIsTasksCompleted: (state, boolean) => (state.isTasksCompleted = boolean),
  },

  actions: {
    async getTasks({ state, commit }) {
      try {
        commit("setIsLoaded", false);

        const { data } = await request.get("linesstoryfn/task", {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        if (data.error) {
          console.log(data.error);
          notify({
            title: "Error",
            text: data.message,
          });
          commit("setIsLoaded", true);
          return;
        }

        commit("setUserTasks", data.data.vocabs);
        commit("setUserAnswers", data.data.answers);
        commit("setUserStoryAnswer", data.data.storyAnswer);
        commit("setIsTasksCompleted", data.data.completed);
        commit("setIsLoaded", true);
      } catch (error) {
        notify({
          title: "Error",
          text: error.message,
        });
        commit("setIsLoaded", true);
        console.log(error);
      }
    },
  },
};

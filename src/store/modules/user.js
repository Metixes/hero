import { notify } from "@kyvg/vue3-notification";
import request from "@/config/request";
import dayjs from "dayjs";

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
    showMenu: true,
    userTasks: [],
    userTaskId: "",
    userAnswers: [{ value: "" }],
    userStoryAnswer: "",
    currentDate: dayjs(new Date()),
    // userDiaries: "",
    // aiDiaries: "",
  }),

  getters: {
    getFullName: (state) => state.userData.first_name + " " + state.userData.last_name,
  },

  mutations: {
    setUserData: (state, object) => (state.userData = object),
    setShowMenu: (state, boolean) => (state.showMenu = boolean),
    setIsLoaded: (state, boolean) => (state.isLoaded = boolean),
    setUserTasks: (state, array) => (state.userTasks = array),
    setUserAnswers: (state, array) => (state.userAnswers = array),
    setUserStoryAnswer: (state, string) => (state.userStoryAnswer = string),
    setIsTasksCompleted: (state, boolean) => (state.isTasksCompleted = boolean),
    setCurrentDate: (state, string) => (state.currentDate = string),
    setUserTaskId: (state, string) => (state.userTaskId = string),
    // setUserDiaries: (state, string) => (state.userDiaries = string),
    // setAiDiaries: (state, string) => (state.aiDiaries = string),
  },

  actions: {
    async getTasks({ state, commit, rootState }, date) {
      try {
        const requestRoute = date
          ? `linesstoryfn/taskbydate?date=${date}`
          : "linesstoryfn/task";

        commit("setIsLoaded", false);

        const { data } = await request.get(requestRoute, {
          headers: {
            token: rootState.token,
          },
        });

        if (data.error) {
          notify({
            title: "Error",
            text: data.message,
          });
          commit("setIsLoaded", true);
          return;
        }

        commit("setUserTasks", data.data.vocabs);
        commit("setUserTaskId", data.data.task_id);
        commit("setUserAnswers", data.data.answers);
        commit("setUserStoryAnswer", data.data.storyAnswer);
        commit("setIsTasksCompleted", data.data.completed);
        commit("setIsLoaded", true);
      } catch (error) {
        notify({
          title: "Error",
          text: error.response.data?.data.message || error.message,
        });
        commit("setIsLoaded", true);
        console.log(error);
      }
    },

    async submitTask({ state, commit, rootState }, requestData) {
      const requestKey = Object.keys(requestData);
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await request.put(
            `linesstoryfn/task/${state.userTaskId}`,
            { [requestKey[0]]: requestData[requestKey[0]] },
            {
              headers: {
                token: rootState.token,
              },
            },
          );

          if (data.error) {
            console.log(data.error);
            return resolve(false);
          }

          if (data.data.completed) {
            commit("setIsTasksCompleted", true);
            notify({
              title: "All done!",
              text: "Next tasks will be available tomorrow",
            });
          }

          if (requestData.hasOwnProperty("slide")) {
            const newAnswers = [...state.userAnswers];
            newAnswers[requestData[requestKey[1]]].value = requestData[requestKey[0]];

            commit("setUserAnswers", newAnswers);
          } else {
            commit("setUserStoryAnswer", requestData[requestKey[0]]);
          }

          const newUserData = { ...state.userData, rating: data.data.rating };
          // console.log("data", data.data);
          // console.log("state", state.userData);
          commit("setUserData", newUserData);
          // console.log("after change", state.userData);
          return resolve(true);
        } catch (error) {
          notify({
            title: "Error",
            text: error.response.data?.data.message || error.message,
          });
          console.log("error");
        }
      });
    },

    async updateStory({ state, commit, rootState }, date) {
      try {
        const { data } = await request.get(`linesstoryfn/taskbydate?date=${date}`, {
          headers: {
            token: rootState.token,
          },
        });

        if (data.error) {
          notify({
            title: "Error",
            text: data.message,
          });
          return;
        }

        console.log(data);
      } catch (error) {
        notify({
          title: "Error",
          text: error.response.data.data.message,
        });
      }
    },
  },
};

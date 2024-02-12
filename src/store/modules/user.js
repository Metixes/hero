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
    isTasksCompletedToday: false,
    showMenu: true,
    userTasks: [],
    userTaskId: "",
    userAnswers: [{ value: "" }],
    userStoryAnswer: "",
    currentDate: dayjs(new Date()),
  }),

  getters: {
    getFullName: (state) => state.userData.first_name + " " + state.userData.last_name,

    getUserData: (state) => {
      return {
        school_name: state.userData.school_name,
        school_year: +state.userData.school_year,
        student_name: state.userData.first_name + " " + state.userData.last_name,
      };
    },
  },

  mutations: {
    setUserData: (state, object) => (state.userData = object),
    setUserTasks: (state, array) => (state.userTasks = array),
    setUserAnswers: (state, array) => (state.userAnswers = array),
    setShowMenu: (state, boolean) => (state.showMenu = boolean),
    setIsLoaded: (state, boolean) => (state.isLoaded = boolean),
    setIsTasksCompleted: (state, boolean) => (state.isTasksCompleted = boolean),
    setIsTasksCompletedToday: (state, boolean) => (state.isTasksCompletedToday = boolean),
    setUserStoryAnswer: (state, string) => (state.userStoryAnswer = string),
    setCurrentDate: (state, string) => (state.currentDate = string),
    setUserTaskId: (state, string) => (state.userTaskId = string),
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

        if (data.data.completed) {
          commit("setIsTasksCompleted", false);
          commit("setIsTasksCompletedToday", data.data.completed);
        }

        if (
          dayjs(state.currentDate).format("YYYY-MM-DD") !==
          dayjs(new Date()).format("YYYY-MM-DD")
        ) {
          notify({
            title: "Error",
            text: "This task has already been completed",
          });
        }

        commit("setUserTasks", data.data.vocabs);
        commit("setUserTaskId", data.data.task_id);
        commit("setUserAnswers", data.data.answers);
        commit("setUserStoryAnswer", data.data.storyAnswer);
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
            commit("setIsTasksCompleted", data.data.completed);
          }

          if (requestData.hasOwnProperty("slide")) {
            const newAnswers = [...state.userAnswers];
            newAnswers[requestData[requestKey[1]]].value = requestData[requestKey[0]];

            commit("setUserAnswers", newAnswers);
          } else {
            commit("setUserStoryAnswer", requestData[requestKey[0]]);
          }

          const newUserData = { ...state.userData, rating: data.data.rating };
          commit("setUserData", newUserData);
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
      } catch (error) {
        notify({
          title: "Error",
          text: error.response.data.data.message,
        });
      }
    },
  },
};

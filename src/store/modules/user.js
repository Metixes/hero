export const user = {
  namespaced: true,
  state: () => ({
    userData: {},
  }),

  getters: {
    getFullName: (state) =>
      state.userData.first_name + " " + state.userData.last_name,
  },

  mutations: {
    setUserData: (state, object) => (state.userData = object),
  },

  actions: {},
};

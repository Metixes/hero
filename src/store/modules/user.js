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
    showMenu: true,
  }),

  getters: {
    getFullName: (state) =>
      state.userData.first_name + " " + state.userData.last_name,
  },

  mutations: {
    setUserData: (state, object) => (state.userData = object),
    setShowMenu: (state, boolean) => (state.showMenu = boolean),
  },

  actions: {},
};

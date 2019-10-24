export default {
  namespaced: true,
  state: {
    isNavDrawerVisible: false,
  },
  getters: {},
  actions: {
    TOGGLE_NAVDRAWER: ({ commit, state }) => {
      commit('SET_IS_NAVDRAWER_VISIBLE', !state.isNavDrawerVisible)
    },
  },
  mutations: {
    SET_IS_NAVDRAWER_VISIBLE: (state, isNavDrawerVisible) => (state.isNavDrawerVisible = isNavDrawerVisible),
  },
};

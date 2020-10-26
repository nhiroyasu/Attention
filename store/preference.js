export const state = () => ({
  mode: 'text/javascript',
});

export const getters = {
  getMode: (state) => {
    return state.mode;
  },
};

export const mutations = {
  updateMode: (state, payload) => {
    state.mode = payload;
  },
};

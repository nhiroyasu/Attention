export const state = () => ({
  code: '',
});

export const getters = {
  getCode: (state) => {
    return state.code;
  },
  getShowing: (state) => {
    return !!state.code;
  },
};

export const mutations = {
  updateCode: (state, payload) => {
    state.code = payload || '';
  },
};

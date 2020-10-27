export const state = () => ({
  code: '',
  position: {
    anchor: {
      line: 0,
    },
    head: {
      line: 0,
    },
  },
});

export const getters = {
  getCode: (state) => {
    return state.code;
  },
  getShowing: (state) => {
    return !!state.code;
  },
  getHeadLine: (state) => {
    const lineNum = state.position.head.line;
    return lineNum || lineNum === 0 ? lineNum + 1 : 0;
  },
  getAnchorLine: (state) => {
    const lineNum = state.position.anchor.line;
    return lineNum || lineNum === 0 ? lineNum + 1 : 0;
  },
};

export const mutations = {
  updateCode: (state, payload) => {
    state.code = payload || '';
  },
  updatePosition: (state, payload) => {
    state.position = payload;
  },
};

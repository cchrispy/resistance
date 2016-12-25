const gamePhase = (state, action) => {
  switch (action.type) {
    case 'CHANGE_PHASE':
      return Object.assign({}, state, {
        [action.phase]: true
      });
    default:
      return state;
  }
}

export default gamePhase;
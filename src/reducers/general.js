const general = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_ROOM':
      return Object.assign({}, state, {
        room: action.roomname
      });
    case 'CHANGE_PLAYER_COUNT':
      return Object.assign({}, state, {
        playerCount: action.playerCount
      });
    case 'CHANGE_PLAYER_NAME':
      return Object.assign({}, state, {
        playerName: action.playerName
      });
    default:
      return state;
  }
}

export default general;
const INITIAL_STATE = {
  state: '',
};

function mySuperReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_SUPER.ACTION':
      return { state: action.state };
    default:
      return state;
  }
}

export default mySuperReducer;
const INITIAL_STATE = { 
  state: '',
}

export const NEW_ACTION = 'NEW_ACTION';

const myReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_ACTION:
      return { state: action.state }
    default:
      return state;
  }
}

export default myReducer;
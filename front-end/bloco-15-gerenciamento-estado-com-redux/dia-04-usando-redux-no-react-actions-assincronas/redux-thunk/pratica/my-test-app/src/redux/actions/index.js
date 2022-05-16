import { NEW_ACTION } from '../reducers/myReducer'

export const newAction = (state) => ({
  type: NEW_ACTION,
  payload: state,
});

import { SET_APPLICATION_DATA } from '../constants/action-types';

const initialState = {
  cats: []
}

function rootReducer(state = initialState, action) {

  switch (action.type) {
    case SET_APPLICATION_DATA:
      return Object.assign({}, state, {
        cats: state.cats.concat(action.payload)
      })
    default:
      return state;
  }
}

export default rootReducer;
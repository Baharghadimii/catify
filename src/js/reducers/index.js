import { SHOW_CATS } from "../constants/action-types";

const initialState = {
  cats: []
}

function rootReducer(state = initialState, action) {
  if (action.type === SHOW_CATS) {
    axios.get()
    state.cats = action.payload;
  }
  return state;
}

export default rootReducer;
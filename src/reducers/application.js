export const SET_APPLICATION_DATA = 'SET_APPLICATION_DATA';

function reducer(state, action) {
  switch (action.type) {
    case SET_APPLICATION_DATA:
      return { ...state, catList: action.catList }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default reducer;
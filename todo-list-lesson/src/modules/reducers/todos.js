import { ADD_TODO, SET_IS_LOADED } from "../actionTypes";

const initialState = {
  data: [],
  isLoaded: false,
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { data } = action.payload;
      return { ...state, data };
    }
    case SET_IS_LOADED: {
      const { isLoaded } = action.payload;
      return { ...state, isLoaded };
    }
    default:
      return state;
  }
};

export default todos;

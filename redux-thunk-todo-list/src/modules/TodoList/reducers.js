import { ADD_TODO, CHANGE_NAME, DELETE_TODO, FETCH_TODOS } from "./actionTypes";

const initialState = {
  data: [],
  isLoaded: false,
  name: '',
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS: {
      const { data } = action.payload;
      return { ...state, data, isLoaded: true, };
    }
    case DELETE_TODO: {
      return {
        ...state,
        isLoaded: false
      }
    }
    case ADD_TODO: {
      return {
        ...state,
        isLoaded: false,
        name: ''
      }
    }
    case CHANGE_NAME: {
      const { name } = action.payload;

      return {
        ...state,
        name,
      }
    }
    default:
      return state;
  }
};

export default todos;

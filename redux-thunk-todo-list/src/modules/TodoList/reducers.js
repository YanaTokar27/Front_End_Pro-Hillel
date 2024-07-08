import { ADD_TODO, EDIT_TODO, CHANGE_NAME, DELETE_TODO, FETCH_TODOS, SET_EDIT, SET_IS_LOADING } from "./actionTypes";

const initialState = {
  data: [],
  isLoaded: false,
  name: '',
  isLoading: false,
  editId: null,
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS: {
      const { data } = action.payload;
      return { ...state, data, isLoaded: true, isLoading: false };
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
    case EDIT_TODO: {
      return {
        ...state,
        isLoaded: false,
        name: '',
        editId: null,
      }
    }
    case CHANGE_NAME: {
      const { name } = action.payload;

      return {
        ...state,
        name,
      }
    }
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case SET_EDIT: {
      const { editId, editName } = action.payload;

      return {
        ...state,
        editId,
        name: editName,
      }
    }
    default:
      return state;
  }
};

export default todos;

import { ADD_TODO, CHANGE_NAME, DELETE_TODO, EDIT_TODO, FETCH_TODOS, SET_EDIT, SET_IS_LOADING } from "./actionTypes";
import { API_URL } from "../../constants";

export const changeName = (name) => ({
  type: CHANGE_NAME,
  payload: {
    name,
  }
})

export const editId = (editId, editName) => ({
  type: SET_EDIT,
  payload: {
    editId,
    editName,
  }
});

export const addTodo = (name) => async (dispatch, getState) => {
  try {
    await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isDone: false,
        name: name,
      }),
    });

    dispatch({
      type: ADD_TODO,
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

export const editTodo = () => async (dispatch, getState) => {
  const { todos } = getState();

  try {
    await fetch(`${API_URL}/todos/${todos.editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isDone: false,
        name: todos.name,
      }),
    });

    dispatch({
      type: EDIT_TODO,
    });
  } catch (error) {
    console.error("Error:", error);
  }
}


export const fetchTodos = () => async (dispatch) => {
  dispatch({
    type: SET_IS_LOADING,
  });
  
  try {
    const response = await fetch(`${API_URL}/todos`);
    const data = await response.json();

    dispatch({
      type: FETCH_TODOS,
      payload: {
        data,
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await fetch(`${API_URL}/todos/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TODO,
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

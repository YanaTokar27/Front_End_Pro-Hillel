import { ADD_TODO, CHANGE_NAME, DELETE_TODO, FETCH_TODOS } from "./actionTypes";
import { API_URL } from "../../constants";

export const addTodo = () => async (dispatch, getState) => {
  const state = getState();

  try {
    await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isDone: false,
        name: state.todos.name,
      }),
    });

    dispatch({
      type: ADD_TODO,
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

export const fetchTodos = () => async (dispatch) => {
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

export const changeName = (name) => ({
  type: CHANGE_NAME,
  payload: {
    name,
  }
})

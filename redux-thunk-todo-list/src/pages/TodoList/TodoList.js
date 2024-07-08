import { useEffect } from "react";
import List from "../../components/List/List";
import TodoFormik from "../../components/Form/Formik";
import Input from '../../components/Input/Input';
import { connect } from "react-redux";
import { addTodo, changeName, editTodo, fetchTodos } from "../../modules/TodoList/actions";

const TodoList = ({ addTodo, changeName, editId, editTodo, fetchTodos, isLoaded, isLoading, name }) => {
  useEffect(() => {
    if (!isLoaded) {
      fetchTodos();
    }
  }, [isLoaded]);

  return (
    <div>
      Todo List
      {isLoading ? <p>Loading</p> : <List />}
      <TodoFormik handleSubmit={editId ? editTodo : addTodo} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoaded: state.todos.isLoaded,
  isLoading: state.todos.isLoading,
  name: state.todos.name,
  editId: state.todos.editId,
});

export default connect(mapStateToProps, { addTodo, changeName, editTodo, fetchTodos })(TodoList);

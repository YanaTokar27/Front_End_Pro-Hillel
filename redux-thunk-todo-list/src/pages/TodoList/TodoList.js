import { useEffect } from "react";
import List from "../../components/List/List";
import Form from "../../components/Form/Form";
import Input from '../../components/Input/Input';
import { connect } from "react-redux";
import { addTodo, changeName, fetchTodos } from "../../modules/TodoList/actions";

const TodoList = ({ addTodo, changeName, fetchTodos, isLoaded, name }) => {
  useEffect(() => {
    if (!isLoaded) {
      fetchTodos();
    }
  }, [isLoaded]);

  return (
    <div>
      Todo List
      <List />
      <Form handleSubmit={addTodo}>
        <label>
          Name:
          <Input value={name} handleChange={changeName} />
        </label>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoaded: state.todos.isLoaded,
  name: state.todos.name,
});

export default connect(mapStateToProps, { addTodo, changeName, fetchTodos })(TodoList);

import { FaBitbucket, FaPencilAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { deleteTodo } from "../../modules/TodoList/actions";
import "./Item.css";

const Item = ({ deleteTodo, item }) => (
  <li>
    <span className={item.isDone ? "item-done" : "item"}>{item.name}</span>
    <FaPencilAlt className="icon-button" />
    <FaBitbucket className="icon-button" onClick={() => deleteTodo(item.id)}/>
  </li>
);

export default connect(null, { deleteTodo })(Item);

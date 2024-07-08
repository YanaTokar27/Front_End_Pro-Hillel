import { FaBitbucket, FaPencilAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { editId, deleteTodo } from "../../modules/TodoList/actions";
import styles from"./Item.module.css";

const Item = ({ deleteTodo, editId, item }) => (
  <li>
    <span className={item.isDone ? styles.itemDone : styles.item}>{item.name}</span>
    <FaPencilAlt className="icon-button" onClick={() => editId(item.id, item.name)}/>
    <FaBitbucket className="icon-button" onClick={() => deleteTodo(item.id)}/>
  </li>
);

export default connect(null, { deleteTodo, editId })(Item);

import Item from "../Item/Item";
import { connect } from "react-redux";

const List = ({ items, ...restProps }) => (
  <ul>
    {items.map((item) => (
      <Item key={item.id} item={item} {...restProps} />
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  items: state.todos.data,
})

export default connect(mapStateToProps)(List);

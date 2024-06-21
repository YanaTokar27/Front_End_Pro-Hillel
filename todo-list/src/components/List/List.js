import Item from "../Item/Item";

const List = ({ items, ...restProps }) => (
  <ul>
    {items.map((item) => (
      <Item key={item.id} item={item} {...restProps} />
    ))}
  </ul>
);

export default List;

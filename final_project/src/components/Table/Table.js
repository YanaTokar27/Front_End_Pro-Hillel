import React from 'react';
import './Table.css';
import { TbArrowsSort } from "react-icons/tb";
import { BsFillPencilFill } from "react-icons/bs";
import { FaBoxArchive } from "react-icons/fa6";

const Table = (props) => {

  return (
    <div>
      <table className='Table'>
        <thead>
          <tr>
            <th className='item'>ID<TbArrowsSort className='arrow' /></th>
            <th className='item'>Category <TbArrowsSort className='arrow' /></th>
            <th className='item '>Name <TbArrowsSort className='arrow' /></th>
            <th className='item'>Quantity <TbArrowsSort className='arrow' /></th>
            <th className='item'>Price <TbArrowsSort className='arrow' /></th>
            <th className='item'></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td><BsFillPencilFill className='pencil' /> <FaBoxArchive className='box' /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
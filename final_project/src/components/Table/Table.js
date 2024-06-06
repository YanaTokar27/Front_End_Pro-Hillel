import React from 'react';
import './Table.css';
import { TbArrowsSort } from "react-icons/tb";
import { BsFillPencilFill } from "react-icons/bs";
import { FaBoxArchive } from "react-icons/fa6";

const products = [
  { id: 0, category: 'PC', name: 'Lenovo Y50-70', quantity: 5, price: '25,000.00' },
  { id: 1, category: 'Clothes', name: 'Nike M Nk Df Acd21', quantity: 22, price: '4,000.00' },
  { id: 2, category: 'Plumbing', name: 'CERSANIT MITO 17', quantity: 1337, price: '5,000.00' },
]

function Table() {
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
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td><BsFillPencilFill className='pencil'/> <FaBoxArchive className='box'/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
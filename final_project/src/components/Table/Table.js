import React, { useState } from "react";
import "./Table.css";
import { TbArrowsSort } from "react-icons/tb";
import { BsFillPencilFill } from "react-icons/bs";
import { FaBoxArchive } from "react-icons/fa6";
import EditProduct from "../EditProduct/EditProduct";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";

const Table = ({ products, onProductChanged, onProductDelete }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});

  const [showDelete, setShowDelete] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(-1);

  const editProduct = (product) => {
    console.log(product);
    setEditedProduct(product);
    setShowEdit(true);
  };

  const closeEditDialog = () => setShowEdit(false);
  const saveEditDialog = (product) => {
    setShowEdit(false);
    onProductChanged(product);
  };

  const openConfirmDelete = (productId) => {
    setShowDelete(true);
    setProductIdToDelete(productId);
  };

  const confirmDelete = () => {
    setShowDelete(false);
    onProductDelete(productIdToDelete);
  };

  return (
    <div>
      <EditProduct
        product={editedProduct}
        show={showEdit}
        handleClose={closeEditDialog}
        handleSave={saveEditDialog}
      />
      <ConfirmDelete
        show={showDelete}
        handleClose={() => setShowDelete(false)}
        handleDelete={confirmDelete}
      />
      <table className="Table">
        <thead>
          <tr>
            <th className="item">
              ID
              <TbArrowsSort className="arrow" />
            </th>
            <th className="item">
              Category <TbArrowsSort className="arrow" />
            </th>
            <th className="item ">
              Name <TbArrowsSort className="arrow" />
            </th>
            <th className="item">
              Quantity <TbArrowsSort className="arrow" />
            </th>
            <th className="item">
              Price <TbArrowsSort className="arrow" />
            </th>
            <th className="item"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                <BsFillPencilFill
                  className="pencil"
                  onClick={() => editProduct(product)}
                />
                <FaBoxArchive
                  className="box"
                  onClick={() => openConfirmDelete(product.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

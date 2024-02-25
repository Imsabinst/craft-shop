import React from "react";

import cross_icon from "../../assets/cross_icon.png";

import "./productListTable.css";

const ProductListTable = ({ products, handleDelete }) => {
  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Title</th>
              <th>Old Price</th>
              <th>New Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/productImage/${item._id}`}
                    alt=""
                    className="listproduct-product-image"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.old_price}</td>
                <td>{item.new_price}</td>
                <td>
                  <button
                    colorScheme="red"
                    mr={3}
                    onClick={() => handleDelete(item._id)}
                  >
                    <img
                      src={cross_icon}
                      alt=""
                      className="listproduct-delete-icon"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductListTable;

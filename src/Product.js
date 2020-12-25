import React, { useState } from "react";

const Product = ({ id, imgUrl, type, price, removeProduct }) => {
  return (
    <article className="single-product">
      <img src={imgUrl} alt={type} />
      <footer>
        <div className="product-info">
          <h4>{type}</h4>
          <h4 className="product-price">{price}</h4>
        </div>
        <button className="delete-btn" onClick={() => removeProduct(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Product;

import React from "react";
import Product from "./Product";
const Products = ({ products, removeProduct }) => {
  return (
    <section>
      <div>
        {products.map((product) => {
          return (
            <Product
              removeProduct={removeProduct}
              {...product}
              key={"Product" + product.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;

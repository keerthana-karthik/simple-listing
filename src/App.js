import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Products from "./Products";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url =
  "https://my-json-server.typicode.com/keerthana-karthik/ecommerce/salwars";
function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const removeProduct = (id) => {
    setProducts((products) => {
      const filteredProducts = products.filter((product) => {
        return id !== product.id;
      });
      return filteredProducts;
    });
  };
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const productsResponse = await response.json();
      console.log(productsResponse);
      setProducts((products) => {
        return productsResponse;
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Products removeProduct={removeProduct} products={products} />
      <button className="btn" onClick={() => fetchProducts()}>
        refresh
      </button>
    </main>
  );
}

export default App;

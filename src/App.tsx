import React, { useState } from "react";

import GlobalStyle from "./styles/GlobalStyles";
import ProductForm from "./components/ProductForm";
import { Product } from "./types/types";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const handleRemoveProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEditProduct = (id: number, newQuantity: number) => {
    setProducts(
      products.map((products) =>
        products.id === id ? { ...products, quantity: newQuantity } : products
      )
    );
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <ProductForm onAdd={handleAddProduct} />
        <ProductList
          product={products}
          onRemove={handleRemoveProduct}
          onEdit={handleEditProduct}
        />
      </div>
    </>
  );
}

export default App;

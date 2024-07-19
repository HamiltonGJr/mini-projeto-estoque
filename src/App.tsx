import React, { useState } from "react";

import GlobalStyle from "./styles/GlobalStyles";
import ProductForm from "./components/ProductForm";
import { Product } from "./types/types";
import ProductList from "./components/ProductList";
import { ButtonTheme, ContainerGeral } from "./styles/AppStyles";
import { useTheme, ligthTheme } from "./contexts/ThemeContext";

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

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <GlobalStyle />
      <ContainerGeral
        style={{ background: theme.background, color: theme.color }}
      >
        <ProductForm onAdd={handleAddProduct} />
        <ButtonTheme onClick={toggleTheme}>
          {theme === ligthTheme ? "Escuro" : "Claro"}
        </ButtonTheme>
        <ProductList
          product={products}
          onRemove={handleRemoveProduct}
          onEdit={handleEditProduct}
        />
      </ContainerGeral>
    </>
  );
}

export default App;

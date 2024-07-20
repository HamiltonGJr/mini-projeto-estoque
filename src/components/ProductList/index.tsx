import React from "react";

import ProductItem from "../ProductItem";
import { ProductListProps } from "../../types/types";
import {
  ContainerListProduct,
  HeaderProduct,
  ListProduct,
  SubTitleProduct,
} from "./style";

function ProductList({ product, onRemove, onEdit }: ProductListProps) {
  return (
    <ContainerListProduct>
      <HeaderProduct>
        <SubTitleProduct>Aplicativo de Estoque</SubTitleProduct>
      </HeaderProduct>

      <ListProduct>
        {product.map((product) => (
          <ProductItem
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            quantity={product.quantity}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        ))}
      </ListProduct>
    </ContainerListProduct>
  );
}

export default ProductList;

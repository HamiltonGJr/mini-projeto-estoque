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

      <div>
        <h2>Comida</h2>
        <ListProduct>
          {product.map((product) =>
            product.productType === "food" ? (
              <ProductItem
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
                productType={product.productType}
                onRemove={onRemove}
                onEdit={onEdit}
              />
            ) : (
              ""
            )
          )}
        </ListProduct>
      </div>

      <div>
        <h2>Bebida</h2>
        <ListProduct>
          {product.map((product) =>
            product.productType === "drink" ? (
              <ProductItem
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
                productType={product.productType}
                onRemove={onRemove}
                onEdit={onEdit}
              />
            ) : (
              ""
            )
          )}
        </ListProduct>
      </div>

      <div>
        <h2>Não comestível</h2>
        <ListProduct>
          {product.map((product) =>
            product.productType === "inedible" ? (
              <ProductItem
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
                productType={product.productType}
                onRemove={onRemove}
                onEdit={onEdit}
              />
            ) : (
              ""
            )
          )}
        </ListProduct>
      </div>
    </ContainerListProduct>
  );
}

export default ProductList;

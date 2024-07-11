import React, { useState } from "react";

import { Product } from "../../types/types";
import {
  ButtonProduct,
  ContainerButton,
  ContainerProduct,
  NameProduct,
} from "./style";

function ProductItem({
  id,
  name,
  description,
  price,
  quantity,
  onRemove,
  onEdit,
}: Product) {
  const [editId, setEditId] = useState<number | null>(null);
  const [newQuantity, setNewQuantity] = useState<number>(0);

  const handleEditClick = (id: number) => {
    setEditId(id);
  };

  const handleSaveClick = (id: number) => {
    if (newQuantity > 0 && Number.isInteger(newQuantity)) {
      onEdit(id, newQuantity);
      setEditId(null);
      setNewQuantity(0);
    } else {
      alert("A quantidade deve ser um número inteiro positivo");
    }
  };

  return (
    <ContainerProduct key={id}>
      <NameProduct>{name}</NameProduct>

      <p>
        <strong>Descrição:</strong> {description}
      </p>
      <p>
        <strong>Preço:</strong> R${price},00
      </p>
      <p>
        <strong>Quantidade:</strong>{" "}
        {editId === id ? (
          <input
            type="number"
            value={newQuantity}
            onChange={(e) => setNewQuantity(Number(e.target.value))}
          />
        ) : (
          quantity
        )}
      </p>

      <ContainerButton>
        {editId === id ? (
          <ButtonProduct color={"#079100"} onClick={() => handleSaveClick(id)}>
            Salvar
          </ButtonProduct>
        ) : (
          <ButtonProduct color={"#004793"} onClick={() => handleEditClick(id)}>
            Nova Quantidade
          </ButtonProduct>
        )}
        <ButtonProduct color={"#910000"} onClick={() => onRemove(id)}>
          Remover
        </ButtonProduct>
      </ContainerButton>
    </ContainerProduct>
  );
}

export default ProductItem;

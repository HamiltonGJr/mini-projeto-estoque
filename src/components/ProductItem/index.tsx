import React, { useState } from "react";

import { Product } from "../../types/types";
import {
  ButtonProduct,
  ContainerButton,
  ContainerProduct,
  InputProduct,
  NameProduct,
  TextProduct,
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

  const handleRemoveClick = (id: number) => {
    const confirmDelete = window.confirm(
      "Tem certeza de que deseja excluir este produto?"
    );

    if (confirmDelete) {
      onRemove(id);
    }
  };

  return (
    <ContainerProduct key={id}>
      <NameProduct>{name}</NameProduct>

      <TextProduct>
        <strong>Descrição:</strong> {description}
      </TextProduct>
      <TextProduct>
        <strong>Preço:</strong> R${price},00
      </TextProduct>
      <TextProduct>
        <strong>Quantidade:</strong>{" "}
        {editId === id ? (
          <InputProduct
            type="number"
            value={newQuantity}
            onChange={(e) => setNewQuantity(Number(e.target.value))}
          />
        ) : (
          quantity
        )}
      </TextProduct>

      <ContainerButton>
        {editId === id ? (
          <ButtonProduct color={"#36D99D"} onClick={() => handleSaveClick(id)}>
            Salvar
          </ButtonProduct>
        ) : (
          <ButtonProduct color={"#3C3C40"} onClick={() => handleEditClick(id)}>
            Nova Quantidade
          </ButtonProduct>
        )}
        <ButtonProduct color={"#a52929"} onClick={() => handleRemoveClick(id)}>
          Remover
        </ButtonProduct>
      </ContainerButton>
    </ContainerProduct>
  );
}

export default ProductItem;

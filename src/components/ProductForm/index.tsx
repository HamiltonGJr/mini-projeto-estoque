import React, { useState } from "react";

import { ProductFormProps } from "../../types/types";
import {
  FormRegister,
  TitleForRegister,
  InputRegister,
  ButtonRegister,
} from "./style";

function ProductForm({ onAdd }: ProductFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (name === "" || description === "") {
      alert("Preencha todos os campos com valores válidos.");
      return;
    }

    if (price <= 0 || quantity <= 0) {
      alert("O preço e a quantidade devem ser maiores que zero.");
      return;
    }

    onAdd({
      id: Date.now(),
      name,
      description,
      price,
      quantity,
      onRemove: function (id: number): void {
        throw new Error("Function not implemented.");
      },
      onEdit: function (id: number, newQuantity: number): void {
        throw new Error("Function not implemented.");
      },
    });
    setName("");
    setDescription("");
    setPrice(0);
    setQuantity(0);
  }

  return (
    <>
      <TitleForRegister>Cadastre um novo Produto</TitleForRegister>
      <FormRegister action="" onSubmit={handleSubmit}>
        <label htmlFor="name">
          PRODUTO:
          <InputRegister
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            name="name"
          />
        </label>
        <label htmlFor="description">
          DESCRIÇÃO:
          <InputRegister
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            name="description"
          />
        </label>
        <label htmlFor="price">
          PREÇO:
          <InputRegister
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            id="price"
            name="price"
          />
        </label>
        <label htmlFor="quantity">
          QUANTIDADE:
          <InputRegister
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            id="quantity"
            name="quantity"
          />
        </label>

        <ButtonRegister type="submit">Adicionar produto</ButtonRegister>
      </FormRegister>
    </>
  );
}

export default ProductForm;

import React, { useState } from "react";

import { ProductFormProps } from "../../types/types";
import {
  FormRegister,
  TitleForRegister,
  InputRegister,
  ButtonRegister,
  LabelRegister,
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
      onRemove: () => {
        console.log("onRemove");
      },
      onEdit: () => {
        console.log("onEdit");
      },
    });
    setName("");
    setDescription("");
    setPrice(0);
    setQuantity(0);
  }

  return (
    <FormRegister action="" onSubmit={handleSubmit}>
      <TitleForRegister>Cadastre um novo Produto</TitleForRegister>
      <LabelRegister htmlFor="name">
        Produto*
        <InputRegister
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          name="name"
        />
      </LabelRegister>
      <LabelRegister htmlFor="description">
        Descrição*
        <InputRegister
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          name="description"
        />
      </LabelRegister>
      <LabelRegister htmlFor="price">
        Preço*
        <InputRegister
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          id="price"
          name="price"
        />
      </LabelRegister>
      <LabelRegister htmlFor="quantity">
        Quantidade*
        <InputRegister
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          id="quantity"
          name="quantity"
        />
      </LabelRegister>

      <ButtonRegister type="submit">Adicionar produto</ButtonRegister>
    </FormRegister>
  );
}

export default ProductForm;

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  onRemove: (id: number) => void;
  onEdit: (id: number, newQuantity: number) => void;
};

export type ProductListProps = {
  product: Product[];
  onRemove: (id: number) => void;
  onEdit: (id: number, newQuantity: number) => void;
};

export type ProductFormProps = {
  onAdd: (product: Product) => void;
};

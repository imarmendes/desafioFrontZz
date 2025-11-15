import { useState } from "react";
import type { Product } from "../models/Product";
// import { productApi } from "../../api/productApi";

export function useProductFormViewModel(initial?: Product) {
  const [name, setName] = useState(initial?.name ?? "");
  const [price, setPrice] = useState(initial?.price ?? 0);
  const [description, setDescription] = useState(initial?.description ?? "");

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function save() {
    setError(null);

    if (!name.trim()) return setError("Nome é obrigatório");
    if (price <= 0) return setError("Preço inválido");

    setSaving(true);

    try {
      if (initial) {
        // await productApi.update(initial.id, { name, price, description });
      } else {
        // await productApi.create({ name, price, description });
      }

      return true;
    } catch (err: any) {
      setError(err.message ?? "Erro ao salvar");
    } finally {
      setSaving(false);
    }
  }

  return {
    name,
    price,
    description,
    saving,
    error,
    setName,
    setPrice,
    setDescription,
    save
  };
}

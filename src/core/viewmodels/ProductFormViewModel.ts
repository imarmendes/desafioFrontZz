import { useState, useEffect } from "react";
import { productApi } from "../../api/productApi";
import { validators } from "../utils/validators";

export function useProductFormViewModel(productId?: number) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // carregar produto ao editar
  useEffect(() => {
    if (!productId) return;

    async function load() {
      setLoading(true);
      try {
        const product = await productApi.getById(String(productId));
        setName(product.name);
        setPrice(String(product.price));
        setDescription(product.description ?? "");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [productId]);

  async function save() {
    setError(null);

    if (!validators.required(name)) {
      setError("Nome é obrigatório");
      return;
    }

    if (!validators.required(price) || isNaN(Number(price))) {
      setError("Preço inválido");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name,
        price: Number(price),
        description,
      };

      if (productId) {
        await productApi.update(String(productId), payload);
      } else {
        await productApi.create(payload);
      }

      return true; // sinaliza sucesso
    } catch (err: any) {
      setError(err.message ?? "Erro ao salvar produto");
    } finally {
      setLoading(false);
    }
  }

  return {
    name,
    price,
    description,
    loading,
    error,
    setName,
    setPrice,
    setDescription,
    save,
  };
}

import { useState, useEffect } from "react";
import { productApi } from "../../api/productApi";
import { validators } from "../utils/validators";
import { formatBRLFromNumber, formatBRLFromDigits, parseNumberFromMaskedBRL } from "../utils/money";

export function useProductFormViewModel(productId?: string) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0); // valor numérico em reais
  const [priceDisplay, setPriceDisplay] = useState<string>(""); // máscara BRL
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
        setPrice(product.price);
        setPriceDisplay(formatBRLFromNumber(product.price));
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

    if (price <= 0 || isNaN(price)) {
      setError("Preço inválido");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name,
        price: price,
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
    priceDisplay,
    description,
    loading,
    error,
    setName,
    setDescription,
    // setter para máscara
    setPriceDisplay: (input: string) => {
      // aceita apagando tudo
      if (!input) {
        setPrice(0);
        setPriceDisplay("");
        return;
      }
      const masked = formatBRLFromDigits(input);
      const numeric = parseNumberFromMaskedBRL(masked);
      setPrice(numeric);
      setPriceDisplay(masked);
    },
    // já exposto acima
    save,
  };
}

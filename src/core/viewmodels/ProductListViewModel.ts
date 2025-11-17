import { useEffect, useState } from "react";
import type { Product } from "../models/Product";
import { productApi } from "../../api/productApi";

export function useProductListViewModel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    setLoading(true);
    try {
      const list = await productApi.list();   

      setProducts(list);
    } finally {
      setLoading(false);
    }
  }

  async function removeProduct(id: string) {
    await productApi.remove(id);

    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return {
    products,
    loading,
    loadProducts,
    removeProduct
  };
}

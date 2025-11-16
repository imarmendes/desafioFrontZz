import { apiClient } from "./apiClient";

export const productApi = {
  async list() {
    const resp = await apiClient.get("/products");
    console.log(resp.data, "productAP");
    
    return resp.data;
  },

  async getById(id: string) {
    const resp = await apiClient.get(`/products/${id}`);
    return resp.data;
  },

  async create(data: { name: string; price: number;description: string }) {
    const resp = await apiClient.post("/products", data);
    return resp.data;
  },

  async update(id: string, data: { name: string; price: number;description: string }) {
    const resp = await apiClient.put(`/products/${id}`, data);
    return resp.data;
  },

  async remove(id: string) {
    const resp = await apiClient.delete(`/products/${id}`);
    return resp.data;
  },
};

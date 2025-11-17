import { apiClient } from "./apiClient";

export const authApi = {
  async login(data: { email: string; password: string }) {
    const resp = await apiClient.post("/auth/login", data);
    return resp.data;
  },

  async register(data: { name: string; email: string; password: string }) {
    const resp = await apiClient.post("/auth/register", data);
    
    return resp.data;
  },
};

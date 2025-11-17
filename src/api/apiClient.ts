import axios from "axios";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { storage } from "../core/utils/storage";

// 👉 coloque aqui a URL da sua API
const BASE_URL = "http://localhost:3000/api";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔥 Interceptor para adicionar o token automaticamente
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const user = storage.getUser(); // { token, name, email }
    if (user?.token) {
      const current = (config.headers as Record<string, unknown> | undefined) ?? {};
      config.headers = {
        ...current,
        Authorization: `Bearer ${user.token}`,
      } as InternalAxiosRequestConfig["headers"];
    }
    return config;
  },
  (error: any) => Promise.reject(error)
);

// 🔥 Interceptor para erros globais
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: any) => {
    if (error?.response) {
      console.error("API Error:", error.response);
    } else {
      console.error("API Error (sem resposta):", error);
    }
    return Promise.reject(error);
  }
);

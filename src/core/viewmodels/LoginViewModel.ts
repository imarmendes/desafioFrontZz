import { useState } from "react";
import { validators } from "../utils/validators";
import { storage } from "../utils/storage";
// import { authApi } from "../../api/authApi"; // habilitar depois

export function useLoginViewModel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function login() {
    setError(null);

    if (!validators.isEmail(email)) {
      setError("E-mail inválido");
      return;
    }

    if (!validators.required(password)) {
      setError("Senha é obrigatória");
      return;
    }

    setLoading(true);

    try {
      // Chamada real posteriormente:
      // const result = await authApi.login({ email, password });

      // simulação por enquanto
      const result = {
        id: "1",
        name: "Usuário Teste",
        email,
        token: "fake-token-123"
      };

      storage.saveUser(result);

      return result; // usado pela View para navegar
    } catch (err: any) {
      setError(err.message ?? "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  }

  return {
    email,
    password,
    error,
    loading,
    setEmail,
    setPassword,
    login
  };
}

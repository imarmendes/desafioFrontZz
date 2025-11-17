import { useState } from "react";
import { validators } from "../utils/validators";
import { storage } from "../utils/storage";
import { authApi } from "../../api/authApi"; 

export function useRegisterViewModel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function register() {
    setError(null);

    // validações
    if (!validators.required(name)) {
      setError("Nome é obrigatório");
      return;
    }

    if (!validators.isEmail(email)) {
      setError("E-mail inválido");
      return;
    }

    if (!validators.required(password)) {
      setError("A senha é obrigatória");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    setLoading(true);

    try {
      // Chamada real futuramente:
      const user = await authApi.register({ name, email, password });

      // Simulação por enquanto:
      // const user = {
      //   id: "fake-id-1",
      //   name,
      //   email,
      //   token: "fake-token-999",
      // };

      storage.saveUser(user);

      return user;
    } catch (err: any) {
      setError(err.message ?? "Erro ao criar conta");
    } finally {
      setLoading(false);
    }
  }

  return {
    name, setName,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    error,
    loading,
    register
  };
}

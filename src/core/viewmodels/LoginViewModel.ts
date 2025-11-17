import { useState } from "react";
import { validators } from "../utils/validators";
import { storage } from "../utils/storage";
import { authApi } from "../../api/authApi";

export function useLoginViewModel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function updateEmail(v: string) {
    setEmail(v)
    setError(null)
  }

  function updatePassword(v: string) {
    setPassword(v)
    setError(null)
  }

  async function login() {
    setError(null);

    if (!validators.isEmail(email)) {
      setError("E-mail inválido");
      return null;
    }

    if (!validators.required(password)) {
      setError("Senha é obrigatória");
      return null;
    }

    setLoading(true);

    try {
      const result = await authApi.login({ email, password });

      storage.saveUser(result);
      
      return result;

    } catch (err: any) {
      setError(err.message ?? "Erro ao fazer login");
      return null
    } finally {
      setLoading(false);
    }
  }

  return {
    email,
    password,
    error,
    loading,
    setEmail: updateEmail,
    setPassword: updatePassword,
    login
  };
}

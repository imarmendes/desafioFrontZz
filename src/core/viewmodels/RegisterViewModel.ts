import { useState } from "react";
import { validators } from "../utils/validators";
// import { authApi } from "../../api/authApi";

export function useRegisterViewModel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function register() {
    setError(null);

    if (!validators.required(name)) return setError("Nome obrigatório");
    if (!validators.isEmail(email)) return setError("E-mail inválido");
    if (!validators.required(password)) return setError("Senha obrigatória");
    if (password !== confirm) return setError("As senhas não coincidem");

    setLoading(true);

    try {
      // chamada futura:
      // await authApi.register({ name, email, password });

      await new Promise((r) => setTimeout(r, 600));

      return true;
    } catch (err: any) {
      setError(err.message ?? "Erro ao cadastrar");
    } finally {
      setLoading(false);
    }
  }

  return {
    name,
    email,
    password,
    confirm,
    error,
    loading,
    setName,
    setEmail,
    setPassword,
    setConfirm,
    register
  };
}

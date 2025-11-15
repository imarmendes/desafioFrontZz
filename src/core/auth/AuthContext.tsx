import { createContext, useContext, useEffect, useState } from "react";
import { storage } from "../utils/storage";

type User = {
  id: string;
  name: string;
  email: string;
  token: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = storage.getUser();
    if (saved) setUser(saved);
    setLoading(false);
  }, []);

  function login(user: User) {
    storage.saveUser(user);
    setUser(user);
  }

  function logout() {
    storage.clearUser();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}

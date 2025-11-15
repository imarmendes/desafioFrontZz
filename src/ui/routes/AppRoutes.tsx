import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";
import { RegisterPage } from "../pages/Register/RegisterPage";
import { ProductsPage } from "../pages/Products/ProductsPage";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { AuthProvider } from "../../core/auth/AuthContext";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

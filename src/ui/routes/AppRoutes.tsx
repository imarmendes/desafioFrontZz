import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";
import { RegisterPage } from "../pages/Register/RegisterPage";
import { ProductsPage } from "../pages/Products/ProductsPage";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { AuthProvider } from "../../core/auth/AuthContext";
import { PrivateLayout } from "../layout/PrivateLayout";
import { ProductFormPage } from "../pages/Products/ProductFormPage";

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
                <PrivateLayout>
                  <ProductsPage />
                </PrivateLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/products/new"
            element={
              <ProtectedRoute>
                <ProductFormPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/products/edit/:id"
            element={
              <ProtectedRoute>
                <ProductFormPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./context/Context";
import { Theme } from "./global/theme";
import { GlobalStyles } from "./global/globalStyles";
import { Login } from "./components/Pages/Login";
import { ProtectedRoute } from "./components/Atoms/ProtectedRoute";
import { ForgotPassword } from "./components/Pages/FogotPassword";
import { General } from "./components/Pages/General";
import { RecoveryPassword } from "./components/Pages/RecoveryPassword";
import { Tendencies } from "./components/Pages/Tendencies";
import { ProductivitySurveyor } from "./components/Pages/ProductivitySurveyor";
import { Mattress } from "./components/Pages/Mattress";
import { Repayment } from "./components/Pages/Repayment";
import { ProductivityService } from "./components/Pages/ProductivityService";

export function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={Theme}>
        <ToastContainer autoClose={2500} />
        <GlobalStyles />
        <ContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to={"/relatorio-geral"} />} />

              <Route
                path="/relatorio-geral"
                element={
                  <ProtectedRoute>
                    <General />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/relatorio-tendencia"
                element={
                  <ProtectedRoute>
                    <Tendencies />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/relatorio-colchao"
                element={
                  <ProtectedRoute>
                    <Mattress />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/relatorio-produtividade-vistoriador"
                element={
                  <ProtectedRoute>
                    <ProductivitySurveyor />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/relatorio-produtividade-servico"
                element={
                  <ProtectedRoute>
                    <ProductivityService />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/relatorio-reembolso"
                element={
                  <ProtectedRoute>
                    <Repayment />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />

              <Route path="/recuperar-senha" element={<RecoveryPassword />} />

              <Route path="/esqueci-senha" element={<ForgotPassword />} />
            </Routes>
          </BrowserRouter>
        </ContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

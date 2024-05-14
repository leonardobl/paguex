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
import { FogotPassword } from "./components/Pages/FogotPassword";
import { Home } from "./components/Pages/Home";
import { RecoveryPassword } from "./components/Pages/RecoveryPassword";

export function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={Theme}>
        <ToastContainer autoClose={2500} />
        <GlobalStyles />
        <ContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to={"/geral"} />} />

              <Route
                path="/geral"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/tendencia"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/produtividade"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />

              <Route path="/login" element={<Login />} />

              <Route path="/recuperar-senha" element={<RecoveryPassword />} />

              <Route path="/esqueci-senha" element={<FogotPassword />} />
            </Routes>
          </BrowserRouter>
        </ContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

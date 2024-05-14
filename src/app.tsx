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
import { General } from "./components/Pages/General";
import { RecoveryPassword } from "./components/Pages/RecoveryPassword";
import { Tendencies } from "./components/Pages/Tendencies";
import { Productivity } from "./components/Pages/Productivity";

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
                    <General />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/tendencia"
                element={
                  <ProtectedRoute>
                    <Tendencies />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/produtividade"
                element={
                  <ProtectedRoute>
                    <Productivity />
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

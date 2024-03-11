import React from "react";

import { ThemeProvider } from "styled-components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./context/Context";
import { Theme } from "./global/theme";
import { GlobalStyles } from "./global/globalStyles";
import { Login } from "./components/Pages/Login";
import { ProtectedRoute } from "./components/Atoms/ProtectedRoute";
import { FogotPassword } from "./components/Pages/FogotPassword";
import { Home } from "./components/Pages/Home";

export function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={Theme}>
        <ToastContainer autoClose={2500} />
        <GlobalStyles />
        <ContextProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/esqueci-senha" element={<FogotPassword />} />
            </Routes>
          </BrowserRouter>
        </ContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

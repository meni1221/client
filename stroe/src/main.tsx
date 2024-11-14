import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Providers/AuthProvider.tsx";
import MisslieProvider from "./Providers/MisslieProvider.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MisslieProvider>
          <App />
        </MisslieProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

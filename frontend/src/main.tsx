import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import Login from "./Login.tsx"
import UserContextProvider from "./context/UserContext.tsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  </StrictMode>
)

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import Login from "./Login.tsx"
import Register from "./Register.tsx"
import Integrity from "./Integrity.tsx"
import UserContextProvider from "./context/UserContext.tsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/integrity" element={<Integrity />} />
          <Route path="/app/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  </StrictMode>
)

import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useTaskStore } from "./store/useTaskStore";
import { useThemeStore } from "./store/useThemeStore";

export default function App() {
  const user = useTaskStore((state) => state.user);
  const theme = useThemeStore((state) => state.theme);

   
  if (!user) {
    return (
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />

      {/* Main window */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Single status views */}
      <Route path="/dashboard/:status" element={<Dashboard />} />

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

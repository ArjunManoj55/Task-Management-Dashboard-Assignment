import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useThemeStore } from "../store/useThemeStore";

export default function DashboardLayout({ children }) {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";

  return (
    <div
      className={`flex min-h-screen transition-colors
        ${isDark ? "bg-gray-900" : "bg-gray-100"}
      `}
    >
      <Sidebar />

      <div
        className={`flex-1 transition-colors
          ${isDark ? "bg-gray-900" : "bg-gray-100"}
        `}
      >
        <Navbar />

        <main
          className={`p-4 transition-colors
            ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}
          `}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

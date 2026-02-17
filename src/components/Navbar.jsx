import { useTaskStore } from "../store/useTaskStore";
import { useThemeStore } from "../store/useThemeStore";

export default function Navbar() {
  const { user, logout } = useTaskStore();
  const { theme, toggleTheme } = useThemeStore();

  const isDark = theme === "dark";

  return (
    <header
      className={`flex justify-between items-center p-4 border-b transition-colors
        ${
          isDark
            ? "bg-gray-800 text-white border-gray-700"
            : "bg-gray-100 text-gray-900 border-gray-200"
        }`}
    >
      <span className="font-medium">
        Welcome <span className="font-semibold">{user.email}</span>
      </span>

      <div className="flex gap-4 items-center">
        <button
          onClick={toggleTheme}
          className="text-xl hover:scale-110 transition"
          title="Toggle theme"
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        <button
          onClick={logout}
          className="text-red-500 hover:text-red-600 font-medium"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

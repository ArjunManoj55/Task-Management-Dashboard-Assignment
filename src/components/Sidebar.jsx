import { NavLink } from "react-router-dom";
import { useThemeStore } from "../store/useThemeStore";

export default function Sidebar() {
  const theme = useThemeStore((state) => state.theme);

  const linkClass = ({ isActive }) =>
    `block p-2 rounded transition ${
      isActive
        ? theme === "dark"
          ? "bg-gray-700"
          : "bg-gray-200 font-semibold"
        : theme === "dark"
        ? "hover:bg-gray-700"
        : "hover:bg-gray-100"
    }`;

  return (
    <aside
      className={`w-52 p-4 transition ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="font-bold mb-4">Task Board</h2>

      <nav className="space-y-2">
        <NavLink to="/dashboard" end className={linkClass}>
          Main Window
        </NavLink>

        <NavLink to="/dashboard/todo" className={linkClass}>
          Todo
        </NavLink>

        <NavLink to="/dashboard/progress" className={linkClass}>
          In Progress
        </NavLink>

        <NavLink to="/dashboard/completed" className={linkClass}>
          Completed
        </NavLink>
      </nav>
    </aside>
  );
}

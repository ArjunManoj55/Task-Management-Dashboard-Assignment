import { useThemeStore } from "../store/useThemeStore";

export default function SearchBar({
  value,
  onChange,
  
}) {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";

  return (
    <div className="flex gap-2 mb-4">
      <input
        className={`flex-1 p-2 rounded border outline-none
          ${
            isDark
              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              : "bg-white border-gray-300 text-gray-900"
          }`}
        placeholder="Search tasks..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      
    </div>
  );
}

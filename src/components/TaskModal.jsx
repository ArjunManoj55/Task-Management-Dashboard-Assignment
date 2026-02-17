import { useState, useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore";

export default function TaskModal({ open, onClose, onSave, task }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { theme } = useThemeStore();

  const isDark = theme === "dark";

  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setDesc(task.description || "");
    } else {
      setTitle("");
      setDesc("");
    }
  }, [task]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div
        className={`w-80 rounded p-4 transition-colors
          ${
            isDark
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-900"
          }`}
      >
        <h2 className="font-bold mb-3">
          {task ? "Edit Task" : "Add Task"}
        </h2>

        <input
          className={`border w-full p-2 mb-2 rounded outline-none
            ${
              isDark
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300"
            }`}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className={`border w-full p-2 mb-3 rounded outline-none
            ${
              isDark
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300"
            }`}
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="hover:underline"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onSave(title, desc);
              onClose();
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

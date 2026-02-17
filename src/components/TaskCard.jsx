import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
import { useThemeStore } from "../store/useThemeStore";
import TaskModal from "./TaskModal";

export default function TaskCard({ task }) {
  const { updateTask, deleteTask } = useTaskStore();
  const { theme } = useThemeStore();
  const [edit, setEdit] = useState(false);

  const isDark = theme === "dark";

  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  const handleStatusChange = () => {
    if (task.status === "todo") {
      updateTask(task.id, { status: "progress" });
    } else if (task.status === "progress") {
      updateTask(task.id, { status: "completed" });
    }
  };

  return (
    <>
      <div
        draggable={task.status !== "completed"}
        onDragStart={handleDragStart}
        className={`border rounded p-3 cursor-move transition-colors
          ${
            isDark
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-gray-50 border-gray-200 text-gray-900"
          }`}
      >
        <h4 className="font-semibold">{task.title}</h4>

        <p
          className={`text-sm mt-1 ${
            isDark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {task.description}
        </p>

        <div className="flex gap-3 mt-3 text-sm">
          {task.status !== "completed" && (
            <button
              onClick={handleStatusChange}
              className="text-blue-500 hover:underline"
            >
              {task.status === "todo"
                ? "Set to Progress"
                : "Set to Completed"}
            </button>
          )}

          <button
            onClick={() => setEdit(true)}
            className="hover:underline"
          >
            Edit
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>

      <TaskModal
        open={edit}
        task={task}
        onClose={() => setEdit(false)}
        onSave={(title, desc) =>
          updateTask(task.id, { title, description: desc })
        }
      />
    </>
  );
}

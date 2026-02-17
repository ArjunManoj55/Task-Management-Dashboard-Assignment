import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";
import { useTaskStore } from "../store/useTaskStore";
import { useThemeStore } from "../store/useThemeStore";

export default function TaskColumn({ title, status, tasks }) {
  const { updateTask } = useTaskStore();
  const { theme } = useThemeStore();

  const isDark = theme === "dark";
  const filtered = tasks.filter((t) => t.status === status);

  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    if (!taskId) return;

    updateTask(Number(taskId), { status });
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className={`p-3 rounded shadow min-h-[350px] transition-colors
        ${
          isDark
            ? "bg-gray-800 text-white"
            : "bg-white text-gray-900"
        }`}
    >
      <h3 className="font-bold mb-3">{title}</h3>

      {filtered.length === 0 && (
        <EmptyState text="No tasks here" />
      )}

      <div className="space-y-3">
        {filtered.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

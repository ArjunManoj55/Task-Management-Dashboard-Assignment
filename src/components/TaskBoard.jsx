import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
import { useThemeStore } from "../store/useThemeStore";
import TaskColumn from "./TaskColumn";
import TaskModal from "./TaskModal";
import SearchBar from "./SearchBar";
import useDebounce from "../hooks/useDebounce";

export default function TaskBoard({ status }) {
  const { tasks, addTask } = useTaskStore();
  const { theme } = useThemeStore();

  const isDark = theme === "dark";

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const debouncedSearch = useDebounce(search);

  const searchedTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  return (
    <div
      className={`p-4 rounded transition-colors
        ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}
      `}
    >
      <SearchBar
        value={search}
        onChange={setSearch}
        filter="all"
        onFilter={() => {}}
      />

      <button
        className="mb-4 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
        onClick={() => setOpen(true)}
      >
        + Add Task
      </button>

      {!status && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TaskColumn title="Todo" status="todo" tasks={searchedTasks} />
          <TaskColumn
            title="In Progress"
            status="progress"
            tasks={searchedTasks}
          />
          <TaskColumn
            title="Completed"
            status="completed"
            tasks={searchedTasks}
          />
        </div>
      )}

      {status && (
        <TaskColumn title={status} status={status} tasks={searchedTasks} />
      )}

      <TaskModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={(title, desc) =>
          addTask({
            id: Date.now(),
            title,
            description: desc,
            status: status || "todo",
          })
        }
      />
    </div>
  );
}

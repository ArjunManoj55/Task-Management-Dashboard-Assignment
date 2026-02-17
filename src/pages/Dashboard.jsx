import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTasks } from "../services/taskService";
import { useTaskStore } from "../store/useTaskStore";
import { useThemeStore } from "../store/useThemeStore";
import DashboardLayout from "../layouts/DashboardLayout";
import TaskBoard from "../components/TaskBoard";
import Loader from "../components/Loader";

export default function Dashboard() {
  const { status } = useParams();  
  const setTasks = useTaskStore((s) => s.setTasks);
  const { theme } = useThemeStore();

  const isDark = theme === "dark";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTasks()
      .then(setTasks)
      .catch(() => setError("Failed to load tasks"))
      .finally(() => setLoading(false));
  }, [setTasks]);

  return (
    <DashboardLayout>
      <div
        className={`p-4 min-h-full transition-colors
          ${
            isDark
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-900"
          }`}
      >
        {loading && <Loader />}

        {error && (
          <p className="text-red-500 dark:text-red-400">
            {error}
          </p>
        )}

        {!loading && !error && <TaskBoard status={status} />}
      </div>
    </DashboardLayout>
  );
}

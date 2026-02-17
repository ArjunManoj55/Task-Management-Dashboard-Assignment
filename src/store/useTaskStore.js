import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTaskStore = create(
  persist(
    (set, get) => ({
      user: null,
      tasks: [],

      setUser: (user) => set({ user }),

      logout: () => set({ user: null, tasks: [] }),

      setTasks: (tasks) => set({ tasks }),

      addTask: (task) =>
        set({ tasks: [...get().tasks, task] }),

      updateTask: (id, updated) =>
        set({
          tasks: get().tasks.map((t) =>
            t.id === id ? { ...t, ...updated } : t
          ),
        }),

      deleteTask: (id) =>
        set({
          tasks: get().tasks.filter((t) => t.id !== id),
        }),
    }),
    { name: "task-store" }
  )
);

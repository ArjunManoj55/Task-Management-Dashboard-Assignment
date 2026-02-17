export const fetchTasks = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=2"
  );
  const data = await res.json();

  return data.map((task) => ({
    id: task.id,
    title: task.title,
    description: "Sample task",
    status: task.completed ? "completed" : "todo",
    source: "api",  
  }));
};

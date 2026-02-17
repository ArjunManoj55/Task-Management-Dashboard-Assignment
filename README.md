# 🧩 Task Management Dashboard (Mini Trello)

A **Task Management Dashboard** built with **React + Vite**, featuring mocked authentication, task board with drag & drop, Zustand state management, and light/dark mode support.

This project was created as a **React Developer Technical Assignment** and focuses on **clean architecture, state management, UX, and modern React practices**.

---

## 🚀 Tech Stack

* **React (Hooks)** – Component-based UI
* **Vite** – Fast development & build tool
* **Tailwind CSS** – Utility-first styling
* **Zustand** – Global state management
* **Fetch API** – API communication
* **React Router** – Client-side routing

---

## ✨ Features Implemented

### 🔐 Authentication (Mocked)

* Simple login page
* Accepts any email/password
* User stored in Zustand
* Login state persisted using `localStorage`
* Redirects to dashboard after login

---

### 🧭 Dashboard Layout

* **Sidebar** for navigation
* **Top Navbar** with user info, logout, and theme toggle
* **Main content area** for task views
* Fully responsive (mobile & desktop)

---

### ✅ Task Management

* Tasks fetched from:

  ```
  https://jsonplaceholder.typicode.com/todos
  ```
* Tasks displayed in **3 states**:

  * **Todo**
  * **In Progress**
  * **Completed**

#### Status Logic

* API `completed: false` → Todo
* API `completed: true` → Completed
* **In Progress** handled locally via Zustand

---

### ➕ Add / ✏️ Edit / 🗑 Delete Tasks

* Add task using modal (title + description)
* Edit task using modal
* Delete task instantly
* Tasks persist alongside API data

---

### 🔁 Drag & Drop

* Drag tasks between columns
* Status updates automatically on drop
* Completed tasks are not draggable

---

### 🔍 Search & Filter

* Search tasks by title
* Filter by task name
* Debounced search for better performance

---

### 🌗 Dark / Light Mode

* Toggle from navbar
* Zustand-powered theme store
* Fully themed:

  * Sidebar
  * Navbar
  * Dashboard
  * Modals
  * Task cards

---

### ⚠️ UX Handling

* Loading state while fetching tasks
* Error handling for API failures
* Empty states for columns with no tasks

---

## 🗂 Folder Structure

```
src/
├── components/
│   ├── TaskBoard.jsx
│   ├── TaskColumn.jsx
│   ├── TaskCard.jsx
│   ├── TaskModal.jsx
│   ├── SearchBar.jsx
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   ├── Loader.jsx
│   └── EmptyState.jsx
│
├── pages/
│   ├── Login.jsx
│   └── Dashboard.jsx
│
├── layouts/
│   └── DashboardLayout.jsx
│
├── store/
│   ├── useTaskStore.js
│   └── useThemeStore.js
│
├── hooks/
│   └── useDebounce.js
│
├── services/
│   └── taskService.js
│
└── utils/
```

---

## 🧠 State Management (Zustand)

### Stores

#### `useTaskStore`

* `user`
* `tasks`
* `setUser()`
* `logout()`
* `setTasks()`
* `addTask()`
* `updateTask()`
* `deleteTask()`

#### `useThemeStore`

* `theme`
* `toggleTheme()`

Both stores use **Zustand persist middleware**.

---

## 🛠 Setup Instructions

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 🧱 Architecture Decisions

* **Zustand over Redux** → simpler, less boilerplate
* **Route-based task views** → clean separation (Main / Todo / Progress / Completed)
* **Local task merging** → API tasks + user tasks coexist
* **Utility-first styling** → faster iteration with Tailwind
* **Single source of truth** → Zustand for user, tasks, and theme

---

## ⚖️ Tradeoffs Made

* No backend authentication (mocked as required)
* No database persistence for tasks (local state only)
* Drag & drop implemented using native HTML5 API (no extra libs)

---

---

## 📸 Submission Includes

* ✅ GitHub Repository
* ✅ Screenshots
* ✅ Working Demo Video
* ✅ This README

---

## 👨‍💻 Author

Built with focus on **clarity, correctness, and interview readiness**.

---

⭐ **Thank you for reviewing!**

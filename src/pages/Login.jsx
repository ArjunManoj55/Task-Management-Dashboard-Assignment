import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";

export default function Login() {
  const setUser = useTaskStore((s) => s.setUser);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded w-80 shadow"
      >
        <h1 className="text-xl font-bold mb-4">Login</h1>

        <input
          type="email"
          required
          placeholder="Email"
          className="w-full border p-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          required
          placeholder="Password"
          className="w-full border p-2 mb-4"
        />

        <button className="w-full bg-gray-900 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

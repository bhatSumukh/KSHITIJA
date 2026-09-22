import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      navigate("/admin");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020b14] px-6 text-white">
      <div className="w-full max-w-md border border-[#e7b65a]/20 bg-[#071522] p-8 shadow-2xl sm:p-10">

        {/* Header */}
        <div className="text-center">
          <p className="text-[9px] uppercase tracking-[0.45em] text-[#e7b65a]">
            KSHITIJA 2026
          </p>

          <h1 className="mt-5 font-serif text-4xl text-[#f2c873]">
            Admin Login
          </h1>

          <div className="mx-auto mt-5 h-px w-16 bg-[#e7b65a]/40" />

          <p className="mt-5 text-xs text-white/40">
            Authorized personnel only
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-10 space-y-6">

          {/* Email */}
          <div>
            <label className="text-[9px] uppercase tracking-[0.25em] text-white/40">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Admin email"
              className="mt-2 w-full border border-white/10 bg-[#020b14] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#e7b65a]/50"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-[9px] uppercase tracking-[0.25em] text-white/40">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mt-2 w-full border border-white/10 bg-[#020b14] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#e7b65a]/50"
            />
          </div>

          {/* Error */}
          {message && (
            <div className="border border-red-500/20 bg-red-500/5 px-4 py-3 text-xs text-red-300">
              {message}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full border border-[#e7b65a] bg-[#e7b65a] px-6 py-4 text-[10px] uppercase tracking-[0.3em] text-[#020b14] transition duration-300 hover:bg-transparent hover:text-[#e7b65a] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-8 text-center text-[9px] uppercase tracking-[0.2em] text-white/20">
          KSHITIJA • NSS • POORNAPRAJNA COLLEGE
        </p>
      </div>
    </main>
  );
}

export default AdminLogin;
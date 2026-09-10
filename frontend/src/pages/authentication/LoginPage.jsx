import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../../services/api.js";


function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 max-w-xl mx-auto w-full">
        <Link to="/" className="text-[#FF6B35] text-2xl font-semibold tracking-tight mb-16">
          Docly
        </Link>

        <h1 className="text-3xl font-bold text-[#1F2937] tracking-tight">Sign in</h1>
        <p className="text-gray-500 mt-2 mb-8 text-sm">
          New here?{" "}
          <Link to="/register" className="text-[#FF6B35] underline underline-offset-2">
            Create an account
          </Link>
        </p>

        {error && (
          <p className="text-red-500 text-sm bg-red-50 px-4 py-2.5 rounded-md mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-sm font-medium text-[#1F2937] mb-1.5 block">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-[#1F2937] outline-none focus:border-[#FF6B35] transition-colors placeholder:text-gray-400"
            />
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium text-[#1F2937] mb-1.5 block">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-[#1F2937] outline-none focus:border-[#FF6B35] transition-colors placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF6B35] text-white font-medium py-2.5 rounded-md text-sm hover:bg-[#e55a28] transition-colors disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>

      {/* Right - Side panel */}
      <div className="hidden lg:flex flex-1 bg-[#FFF7F3] items-center justify-center relative">
        <div className="text-center px-16">
          <div className="w-16 h-16 bg-[#FF6B35] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-[#1F2937] mb-2">Upload. Ask. Know.</h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
            Drop your PDFs and documents, then ask questions. Docly reads and answers instantly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

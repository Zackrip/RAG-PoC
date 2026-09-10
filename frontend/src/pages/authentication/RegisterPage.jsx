import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:3000/api";

function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(`${API}/auth/register`, {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left - Side panel */}
      <div className="hidden lg:flex flex-1 bg-[#FFF7F3] items-center justify-center relative">
        <div className="text-center px-16">
          <div className="w-16 h-16 bg-[#FF6B35] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-[#1F2937] mb-2">Your docs, your answers.</h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
            Powered by RAG — upload any document and get accurate, context-aware answers in seconds.
          </p>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 max-w-xl mx-auto w-full">
        <Link to="/" className="text-[#FF6B35] text-2xl font-semibold tracking-tight mb-16">
          Docly
        </Link>

        <h1 className="text-3xl font-bold text-[#1F2937] tracking-tight">Create account</h1>
        <p className="text-gray-500 mt-2 mb-8 text-sm">
          Already have one?{" "}
          <Link to="/login" className="text-[#FF6B35] underline underline-offset-2">
            Sign in
          </Link>
        </p>

        {error && (
          <p className="text-red-500 text-sm bg-red-50 px-4 py-2.5 rounded-md mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-sm font-medium text-[#1F2937] mb-1.5 block">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-[#1F2937] outline-none focus:border-[#FF6B35] transition-colors placeholder:text-gray-400"
            />
          </div>

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

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-1.5 block">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Min 6 chars"
                className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-[#1F2937] outline-none focus:border-[#FF6B35] transition-colors placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-1.5 block">Confirm</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter"
                className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-[#1F2937] outline-none focus:border-[#FF6B35] transition-colors placeholder:text-gray-400"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF6B35] text-white font-medium py-2.5 rounded-md text-sm hover:bg-[#e55a28] transition-colors disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

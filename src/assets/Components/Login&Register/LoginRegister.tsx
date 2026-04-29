import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation, Navigate } from "react-router-dom";
import { FaUserAlt, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../Context/AuthContext"; // <-- adjust path if needed

const LoginRegister: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, register, currentUser } = useAuth();

  const action = location.pathname === "/register" ? "register" : "login";

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [regUsername, setRegUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [showRegPassword, setShowRegPassword] = useState(false);

  const [loginError, setLoginError] = useState("");
  const [regError, setRegError] = useState("");
  const [loading, setLoading] = useState(false);

  // Clear errors on route change
  useEffect(() => {
    setLoginError("");
    setRegError("");
  }, [location.pathname]);

  // Login then go to the home page
  if (currentUser) return <Navigate to="/" replace />;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);
    try {
      await login(loginEmail, loginPassword);
      navigate("/");
    } catch (error: any) {
      setLoginError(error.message || "Failed to log in");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegError("");
    setLoading(true);
    try {
      await register(regEmail, regPassword);
      navigate("/");
    } catch (error: any) {
      setRegError(error.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      {/* Glass card with slide container */}
      <div className="relative w-full max-w-md bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/30">
        {/* Sliding wrapper */}
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            action === "register" ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          {/*  LOGIN FORM  */}
          <div className="w-full flex-shrink-0 p-8">
            <h2 className="text-3xl font-bold text-center text-white mb-8 drop-shadow-lg">
              Welcome Back
            </h2>

            {loginError && (
              <p className="text-red-400 text-sm text-center mb-4 bg-red-900/30 rounded-lg p-2">
                {loginError}
              </p>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/50 backdrop-blur-sm"
                />
              </div>

              {/* Password with show/hide */}
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
                <input
                  type={showLoginPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                >
                  {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm text-white/80">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-amber-400 rounded" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="hover:text-amber-300 underline">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-indigo-900 font-bold text-lg shadow-lg hover:from-amber-300 hover:to-orange-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="mt-6 text-center text-white/80 text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-amber-300 font-semibold hover:underline">
                Register
              </Link>
            </p>
          </div>

          {/* REGISTER FORM */}
          <div className="w-full flex-shrink-0 p-8">
            <h2 className="text-3xl font-bold text-center text-white mb-8 drop-shadow-lg">
              Join Us
            </h2>

            {regError && (
              <p className="text-red-400 text-sm text-center mb-4 bg-red-900/30 rounded-lg p-2">
                {regError}
              </p>
            )}

            <form onSubmit={handleRegister} className="space-y-5">
              {/* Username (optional) */}
              <div className="relative">
                <FaUserAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
                <input
                  type="text"
                  placeholder="Username"
                  value={regUsername}
                  onChange={(e) => setRegUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                />
              </div>

              {/* Password with show/hide */}
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
                <input
                  type={showRegPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                />
                <button
                  type="button"
                  onClick={() => setShowRegPassword(!showRegPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                >
                  {showRegPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Terms checkbox */}
              <label className="flex items-start gap-2 text-sm text-white/80 cursor-pointer">
                <input type="checkbox" required className="accent-amber-400 rounded mt-1" />
                I agree to the terms & conditions
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg shadow-lg hover:from-purple-400 hover:to-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>

            <p className="mt-6 text-center text-white/80 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-amber-300 font-semibold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
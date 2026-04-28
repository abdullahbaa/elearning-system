// import React, { useState } from "react";
// import "./LoginRegister.css";
// import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
// import { useAuth } from "../Context/AuthContext"; // adjust path

// const LoginRegister: React.FC = () => {
//   const [action, setAction] = useState<string>("");
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [regUsername, setRegUsername] = useState("");
//   const [regEmail, setRegEmail] = useState("");
//   const [regPassword, setRegPassword] = useState("");
//   const [loginError, setLoginError] = useState("");
//   const [regError, setRegError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { login, register } = useAuth();

//   const registerLink = () => {
//     setAction("active");
//     setLoginError("");
//     setRegError("");
//   };

//   const loginLink = () => {
//     setAction("");
//     setLoginError("");
//     setRegError("");
//   };

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoginError("");
//     setLoading(true);
//     try {
//       await login(loginEmail, loginPassword);
//     } catch (error: any) {
//       setLoginError(error.message || "Failed to log in");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setRegError("");
//     setLoading(true);
//     try {
//       // Firebase register only uses email/password.
//       // You can store username later in Firestore or update profile if needed.
//       await register(regEmail, regPassword);
//     } catch (error: any) {
//       setRegError(error.message || "Failed to create account");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={`wrapper ${action}`}>
//       {/* Login Section */}
//       <div className="from-box login">
//         <form onSubmit={handleLogin}>
//           <h1>Login</h1>
//           {loginError && <p className="error-message">{loginError}</p>}
//           {/* Email field (required for Firebase) */}
//           <div className="input-box">
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               value={loginEmail}
//               onChange={(e) => setLoginEmail(e.target.value)}
//             />
//             <FaEnvelope className="icon" />
//           </div>
//           {/* Password box */}
//           <div className="input-box">
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               value={loginPassword}
//               onChange={(e) => setLoginPassword(e.target.value)}
//             />
//             <FaLock className="icon" />
//           </div>
//           <div className="remember-forgot">
//             <label>
//               <input type="checkbox" /> Remember me
//             </label>
//             <a href="#">Forgot Password?</a>
//           </div>
//           <button type="submit" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//           <div className="register-link">
//             <p>
//               Don't have an account?{" "}
//               <a href="#" onClick={registerLink}>
//                 Register
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>

//       {/* Registration Section */}
//       <div className="from-box register">
//         <form onSubmit={handleRegister}>
//           <h1>Registration</h1>
//           {regError && <p className="error-message">{regError}</p>}
//           {/* Username box (optional, not used by Firebase directly) */}
//           <div className="input-box">
//             <input
//               type="text"
//               placeholder="Username"
//               value={regUsername}
//               onChange={(e) => setRegUsername(e.target.value)}
//             />
//             <FaUserAlt className="icon" />
//           </div>
//           {/* Email box */}
//           <div className="input-box">
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               value={regEmail}
//               onChange={(e) => setRegEmail(e.target.value)}
//             />
//             <FaEnvelope className="icon" />
//           </div>
//           {/* Password box */}
//           <div className="input-box">
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               value={regPassword}
//               onChange={(e) => setRegPassword(e.target.value)}
//             />
//             <FaLock className="icon" />
//           </div>
//           <div className="remember-forgot">
//             <label>
//               <input type="checkbox" /> I agree to the terms &amp; Conditions
//             </label>
//           </div>
//           <button type="submit" disabled={loading}>
//             {loading ? "Registering..." : "Register"}
//           </button>
//           <div className="register-link">
//             <p>
//               Already have an account?{" "}
//               <a href="#" onClick={loginLink}>
//                 Login
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginRegister;

import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation, Navigate } from "react-router-dom";
import "./LoginRegister.css";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { useAuth } from "../Context/AuthContext"; // adjust to your actual path

const LoginRegister: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active form from the URL
  const action = location.pathname === "/register" ? "active" : "";

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [regError, setRegError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, register } = useAuth();

  // Clear errors when switching between forms (URL changes)
  useEffect(() => {
    setLoginError("");
    setRegError("");
  }, [location.pathname]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);
    try {
      await login(loginEmail, loginPassword);
      navigate("/"); // redirect to home page after successful login
    } catch (error: any) {
      setLoginError(error.message || "Failed to log in");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRegError("");
    setLoading(true);
    try {
      // Firebase register only uses email/password.
      // Store the username later in Firestore or update the user profile.
      await register(regEmail, regPassword);
      navigate("/"); // redirect to home page after successful registration
    } catch (error: any) {
      setRegError(error.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  const { currentUser } = useAuth();
  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={`wrapper ${action}`}>
      {/* Login Section */}
      <div className="from-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          {loginError && <p className="error-message">{loginError}</p>}

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password">Forgot Password?</Link> {/* optional */}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="register-link">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>

      {/* Registration Section */}
      <div className="from-box register">
        <form onSubmit={handleRegister}>
          <h1>Registration</h1>
          {regError && <p className="error-message">{regError}</p>}

          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={regUsername}
              onChange={(e) => setRegUsername(e.target.value)}
            />
            <FaUserAlt className="icon" />
          </div>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
            />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> I agree to the terms &amp; Conditions
            </label>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

          <div className="register-link">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;

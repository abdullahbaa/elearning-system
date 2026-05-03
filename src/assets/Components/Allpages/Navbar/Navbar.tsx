import React, { useState, useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import {
  FaHome,
  FaTachometerAlt,
  FaBookOpen,
  FaSearch,
  FaVideo,
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaGraduationCap,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const allLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: <FaTachometerAlt />,
      requireAuth: true,
    },
    {
      to: "/my-courses",
      label: "My Courses",
      icon: <FaBookOpen />,
      requireAuth: true,
    },
    { to: "/all-courses", label: "All Courses", icon: <FaBookOpen /> },
    { to: "/course-videos", label: "Videos", icon: <FaVideo /> },
  ];

  const navLinks = useMemo(() => {
    return allLinks.filter((link) => !link.requireAuth || currentUser);
  }, [currentUser]);

  return (
    <nav className="sticky bg-blue-900 top-0 z-50 shadow-lg backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-white hover:text-amber-300 transition-colors duration-200"
          >
            <FaGraduationCap className="text-3xl" />
            <span className="text-2xl font-bold tracking-tight">
              E-Learning
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-amber-200 bg-white/20 shadow-glow"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="text-base">{link.icon}</span>
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-amber-300 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* User Section & Mobile Responsive */}
          <div className="flex items-center gap-4">
            {currentUser ? (
              <div className="relative hidden md:block">
                <button
                  onClick={() =>
                    setIsProfileDropdownOpen(!isProfileDropdownOpen)
                  }
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all duration-200 ring-1 ring-white/20 hover:ring-amber-300/50"
                >
                  <FaUserCircle className="text-xl" />
                  <span className="text-sm font-medium">
                    {currentUser.email?.split("@")[0]}
                  </span>
                </button>

                {/* Dropdown */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-blue-900 rounded-xl shadow-2xl py-2 z-50 animate-fade-in ring-1 ring-black/5">
                    <div className="px-4 py-2 text-sm text-white border-b border-gray-200 t">
                      Signed in as <br />
                      <span className="font-semibold text-black">
                        {currentUser.email}
                      </span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-white hover:bg-red-50 hover:text-red-600 flex items-center gap-2 transition-colors"
                    >
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:inline-flex items-center gap-1 bg-rose-500 hover:bg-rose-400 text-white font-semibold px-5 py-2 rounded-full transition-all duration-200 ring-2 ring-rose-400/50 hover:ring-rose-300"
              >
                <FaUserCircle className="text-lg" />
                Login
              </Link>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-amber-300 focus:outline-none transition-colors p-1"
              >
                {isMobileMenuOpen ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-indigo-900/95 backdrop-blur-md px-4 pb-4 space-y-1 border-t border-white/10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "bg-white/20 text-amber-300"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
          <div className="border-t border-white/20 pt-2 mt-2">
            {currentUser ? (
              <>
                <div className="text-white/70 px-3 py-2 text-sm truncate">
                  {currentUser.email}
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2.5 text-red-200 hover:text-red-100 hover:bg-red-500/20 rounded-lg transition-colors"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-amber-400 text-indigo-900 font-semibold px-5 py-2.5 rounded-full hover:bg-amber-300 transition-colors"
              >
                <FaUserCircle />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

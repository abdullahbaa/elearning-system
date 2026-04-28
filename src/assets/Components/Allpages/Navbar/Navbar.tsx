// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../Context/AuthContext';

// const Navbar: React.FC = () => {
//   const { currentUser, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await logout();
//       navigate('/login');
//     } catch (err) {
//       console.error('Logout error:', err);
//     }
//   };

//   return (
//     <nav>
//       <Link to="/">Home</Link> |{' '}
//       <Link to="/dashboard">Dashboard</Link> |{' '}
//       <Link to="/my-courses">My Courses</Link> |{' '}
//       <Link to="/all-courses">All Courses</Link> |{' '}
//       <Link to="/course-search">Course Search</Link> |{' '}
//       <Link to="/course-videos">Course Videos</Link>
//       {currentUser ? (
//         <button onClick={handleLogout}>Logout</button>
//       ) : (
//         <Link to="/login">Login</Link>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
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
} from 'react-icons/fa';

const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: <FaHome /> },
    { to: '/dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { to: '/my-courses', label: 'My Courses', icon: <FaBookOpen /> },
    { to: '/all-courses', label: 'All Courses', icon: <FaBookOpen /> },
    { to: '/course-search', label: 'Search', icon: <FaSearch /> },
    { to: '/course-videos', label: 'Videos', icon: <FaVideo /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-purple-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-amber-300 transition-colors duration-200">
            <FaGraduationCap className="text-3xl" />
            <span className="text-2xl font-bold tracking-tight">EduLearn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? 'bg-white/20 text-amber-300 scale-105'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* User Section & Mobile menu toggle */}
          <div className="flex items-center gap-4">
            {currentUser ? (
              <div className="relative hidden md:block">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all duration-200"
                >
                  <FaUserCircle className="text-xl" />
                  <span className="text-sm font-medium">
                    {currentUser.email?.split('@')[0]}
                  </span>
                </button>

                {/* Dropdown */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 animate-fade-in">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      Signed in as <br />
                      <span className="font-semibold">{currentUser.email}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 flex items-center gap-2"
                    >
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:inline-block bg-amber-400 hover:bg-amber-300 text-indigo-900 font-semibold px-5 py-2 rounded-full transition-colors duration-200"
              >
                Login
              </Link>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-amber-300 focus:outline-none transition-colors"
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-indigo-800/90 backdrop-blur-sm px-4 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === link.to
                  ? 'bg-white/20 text-amber-300'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
          <div className="border-t border-white/20 pt-2">
            {currentUser ? (
              <>
                <div className="text-white/80 px-3 py-2 text-sm">
                  {currentUser.email}
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 text-red-200 hover:text-red-100 hover:bg-red-500/20 rounded-md transition-colors"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-amber-400 text-indigo-900 font-semibold px-5 py-2 rounded-full hover:bg-amber-300 transition-colors"
              >
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
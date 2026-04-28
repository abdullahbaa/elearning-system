// import { Routes, Route } from "react-router";
// // import Navbar from './assets/Components/Allpages/Navbar/Navbar'
// import LoginRegister from "./assets/Components/Login&Register/LoginRegister";
// import { AuthProvider } from "./assets/Components/Context/AuthContext";

// function App() {
//   return (
//     <>
//       <div>
//         <AuthProvider>
//           <LoginRegister />
//         </AuthProvider>
//       </div>
//     </>
//   );
// }

// export default App;






import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './assets/Components/Context/AuthContext';
import LoginRegister from './assets/Components/Login&Register/LoginRegister';
import Navbar from './assets/Components/Allpages/Navbar/Navbar';
import HomePage from './assets/Components/Allpages/Home/Homepage';
import Dashboard from './assets/Components/Allpages/Dashboard/Dashboard';
import MyCourses from './assets/Components/Allpages/MyCourses/MyCourses';
import AllCourses from './assets/Components/Allpages/AllCourses/AllCourses';
import CourseSearch from './assets/Components/Allpages/CourseSearch/CourseSearch';
import CourseVideos from './assets/Components/Allpages/CourseVideos/CourseVideos';
import ProtectedRoute from './assets/Components/Context/ProtectedRoute';

function App() {
  return (
      <AuthProvider>
        <Navbar />
         <main className="max-w-7xl mx-auto px-4 py-8">
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/register" element={<LoginRegister />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/all-courses" element={<AllCourses />} />
            <Route path="/course-search" element={<CourseSearch />} />
            <Route path="/course-videos" element={<CourseVideos />} />
          </Route>

          {/* Optional: redirect unknown paths to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </main>
      </AuthProvider>
  );
}

export default App;
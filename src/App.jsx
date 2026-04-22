import {Routes , Route} from "react-router";
import Navbar from './assets/Components/Allpages/Navbar/Navbar'
import LoginRegister from './assets/Components/Login&Register/LoginRegister'
import Home from "./assets/Components/Allpages/HomePage"
import Dashboard from "./assets/Components/Allpages/Dashboard"
import MyCourse from "./assets/Components/Allpages/MyCourses"
import AllCourses from "./assets/Components/Allpages/AllCourses"
import CourseVideos from "./assets/Components/Allpages/Course-Videos"
function App() {
  

  return (
    <>
      <div>
        <LoginRegister/>

        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/My Course" element={<MyCourse/>}/>
          <Route path="/All Courses" element={<AllCourses/>}/>
          <Route path="/Course Videos" element={<CourseVideos/>}/>
        </Routes>
        
      </div>
    </>
  )
}

export default App

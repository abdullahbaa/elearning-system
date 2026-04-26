import React, { useState } from "react";
import AllCourses from "./AllCourses";

interface Course {
  id: number;
  courseCode: string;
  courseTitle: string;
  credit: number;
  type: "Theory" | "Lab";
}

const allCoursesData: Course[] = [

  // 40 THEORY COURSES
 
  { id: 1, courseCode: "CSE101", courseTitle: "Introduction to Programming", credit: 3, type: "Theory" },
  { id: 2, courseCode: "CSE102", courseTitle: "Data Structures", credit: 3, type: "Theory" },
  { id: 3, courseCode: "CSE103", courseTitle: "Algorithms", credit: 3, type: "Theory" },
  { id: 4, courseCode: "CSE104", courseTitle: "Database Management System", credit: 3, type: "Theory" },
  { id: 5, courseCode: "CSE105", courseTitle: "Operating System", credit: 3, type: "Theory" },
  { id: 6, courseCode: "CSE106", courseTitle: "Computer Networks", credit: 3, type: "Theory" },
  { id: 7, courseCode: "CSE107", courseTitle: "Software Engineering", credit: 3, type: "Theory" },
  { id: 8, courseCode: "CSE108", courseTitle: "Artificial Intelligence", credit: 3, type: "Theory" },
  { id: 9, courseCode: "CSE109", courseTitle: "Machine Learning", credit: 3, type: "Theory" },
  { id: 10, courseCode: "CSE110", courseTitle: "Compiler Design", credit: 3, type: "Theory" },

  { id: 11, courseCode: "CSE111", courseTitle: "Digital Logic Design", credit: 3, type: "Theory" },
  { id: 12, courseCode: "CSE112", courseTitle: "Computer Architecture", credit: 3, type: "Theory" },
  { id: 13, courseCode: "CSE113", courseTitle: "Theory of Computation", credit: 3, type: "Theory" },
  { id: 14, courseCode: "CSE114", courseTitle: "Discrete Mathematics", credit: 3, type: "Theory" },
  { id: 15, courseCode: "CSE115", courseTitle: "Linear Algebra", credit: 3, type: "Theory" },
  { id: 16, courseCode: "CSE116", courseTitle: "Probability and Statistics", credit: 3, type: "Theory" },
  { id: 17, courseCode: "CSE117", courseTitle: "Numerical Methods", credit: 3, type: "Theory" },
  { id: 18, courseCode: "CSE118", courseTitle: "Web Engineering", credit: 3, type: "Theory" },
  { id: 19, courseCode: "CSE119", courseTitle: "Cyber Security", credit: 3, type: "Theory" },
  { id: 20, courseCode: "CSE120", courseTitle: "Cloud Computing", credit: 3, type: "Theory" },

  { id: 21, courseCode: "CSE121", courseTitle: "Mobile App Development", credit: 3, type: "Theory" },
  { id: 22, courseCode: "CSE122", courseTitle: "Human Computer Interaction", credit: 3, type: "Theory" },
  { id: 23, courseCode: "CSE123", courseTitle: "Computer Graphics", credit: 3, type: "Theory" },
  { id: 24, courseCode: "CSE124", courseTitle: "Distributed Systems", credit: 3, type: "Theory" },
  { id: 25, courseCode: "CSE125", courseTitle: "Parallel Computing", credit: 3, type: "Theory" },
  { id: 26, courseCode: "CSE126", courseTitle: "Information Retrieval", credit: 3, type: "Theory" },
  { id: 27, courseCode: "CSE127", courseTitle: "Natural Language Processing", credit: 3, type: "Theory" },
  { id: 28, courseCode: "CSE128", courseTitle: "Deep Learning", credit: 3, type: "Theory" },
  { id: 29, courseCode: "CSE129", courseTitle: "Blockchain Technology", credit: 3, type: "Theory" },
  { id: 30, courseCode: "CSE130", courseTitle: "IoT Systems", credit: 3, type: "Theory" },

  { id: 31, courseCode: "CSE131", courseTitle: "Microprocessor", credit: 3, type: "Theory" },
  { id: 32, courseCode: "CSE132", courseTitle: "Microcontroller", credit: 3, type: "Theory" },
  { id: 33, courseCode: "CSE133", courseTitle: "Embedded Systems", credit: 3, type: "Theory" },
  { id: 34, courseCode: "CSE134", courseTitle: "E-Commerce", credit: 3, type: "Theory" },
  { id: 35, courseCode: "CSE135", courseTitle: "Project Management", credit: 3, type: "Theory" },
  { id: 36, courseCode: "CSE136", courseTitle: "Research Methodology", credit: 3, type: "Theory" },
  { id: 37, courseCode: "CSE137", courseTitle: "Professional Ethics", credit: 3, type: "Theory" },
  { id: 38, courseCode: "CSE138", courseTitle: "Data Mining", credit: 3, type: "Theory" },
  { id: 39, courseCode: "CSE139", courseTitle: "Simulation and Modeling", credit: 3, type: "Theory" },
  { id: 40, courseCode: "CSE140", courseTitle: "Final Year Project", credit: 3, type: "Theory" },


  // 17 LAB COURSES
  { id: 41, courseCode: "LAB201", courseTitle: "Programming Lab", credit: 1, type: "Lab" },
  { id: 42, courseCode: "LAB202", courseTitle: "Data Structures Lab", credit: 1, type: "Lab" },
  { id: 43, courseCode: "LAB203", courseTitle: "Database Lab", credit: 1, type: "Lab" },
  { id: 44, courseCode: "LAB204", courseTitle: "Networking Lab", credit: 1, type: "Lab" },
  { id: 45, courseCode: "LAB205", courseTitle: "Software Engineering Lab", credit: 1, type: "Lab" },
  { id: 46, courseCode: "LAB206", courseTitle: "AI Lab", credit: 1, type: "Lab" },
  { id: 47, courseCode: "LAB207", courseTitle: "Machine Learning Lab", credit: 1, type: "Lab" },
  { id: 48, courseCode: "LAB208", courseTitle: "Web Development Lab", credit: 1, type: "Lab" },
  { id: 49, courseCode: "LAB209", courseTitle: "Cyber Security Lab", credit: 1, type: "Lab" },
  { id: 50, courseCode: "LAB210", courseTitle: "Cloud Lab", credit: 1, type: "Lab" },
  { id: 51, courseCode: "LAB211", courseTitle: "Mobile App Lab", credit: 1, type: "Lab" },
  { id: 52, courseCode: "LAB212", courseTitle: "Graphics Lab", credit: 1, type: "Lab" },
  { id: 53, courseCode: "LAB213", courseTitle: "Microprocessor Lab", credit: 1, type: "Lab" },
  { id: 54, courseCode: "LAB214", courseTitle: "Microcontroller Lab", credit: 1, type: "Lab" },
  { id: 55, courseCode: "LAB215", courseTitle: "Embedded Systems Lab", credit: 1, type: "Lab" },
  { id: 56, courseCode: "LAB216", courseTitle: "IoT Lab", credit: 1, type: "Lab" },
  { id: 57, courseCode: "LAB217", courseTitle: "Project Lab", credit: 1, type: "Lab" },
];

const AllCourses: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredCourses = allCoursesData.filter((course) =>
    course.courseTitle.toLowerCase().includes(search.toLowerCase()) ||
    course.courseCode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="courses-container">
      <h1>All Courses</h1>

      <input
        type="text"
        placeholder="Search course by name or code..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="course-grid">
        {filteredCourses.map((course) => (
          <div className="course-card" key={course.id}>
            <h3>{course.courseCode}</h3>
            <h2>{course.courseTitle}</h2>
            <p><strong>Credit:</strong> {course.credit}</p>
            <p><strong>Type:</strong> {course.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
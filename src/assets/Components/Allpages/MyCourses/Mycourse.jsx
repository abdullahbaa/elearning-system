import Mycourse  from "./Mycourse"
import MyCourse from "./MyCourses.css"

const myCoursesData = [
  {
    id: 1,
    courseCode: "CSE301",
    courseTitle: "Database Management System",
    teacher: "Mr. Rahman",
    credit: 3,
    semester: "6th Semester",
    status: "Running"
  },
  {
    id: 2,
    courseCode: "CSE302",
    courseTitle: "Operating System",
    teacher: "Mrs. Akter",
    credit: 3,
    semester: "6th Semester",
    status: "Running"
  },
  {
    id: 3,
    courseCode: "CSE303",
    courseTitle: "Computer Networks",
    teacher: "Mr. Hasan",
    credit: 3,
    semester: "6th Semester",
    status: "Running"
  },
  {
    id: 4,
    courseCode: "CSE304",
    courseTitle: "Software Engineering",
    teacher: "Mr. Karim",
    credit: 3,
    semester: "6th Semester",
    status: "Running"
  },
  {
    id: 5,
    courseCode: "LAB305",
    courseTitle: "Database Lab",
    teacher: "Mrs. Jannat",
    credit: 1,
    semester: "6th Semester",
    status: "Running"
  },
  {
    id: 6,
    courseCode: "LAB306",
    courseTitle: "Networking Lab",
    teacher: "Mr. Islam",
    credit: 1,
    semester: "6th Semester",
    status: "Running"
  }
];

const MyCourses = () => {
  const [search, setSearch] = useState("");

  const filteredCourses = myCoursesData.filter((course) =>
    course.courseTitle.toLowerCase().includes(search.toLowerCase()) ||
    course.courseCode.toLowerCase().includes(search.toLowerCase())
  );

const Mycourse = () => {
    return (
    <div className="my-courses-container">
      <h1>My Running Courses</h1>

      <input
        type="text"
        placeholder="Search running course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="course-grid">
        {filteredCourses.map((course) => (
          <div className="course-card" key={course.id}>
            <h3>{course.courseCode}</h3>
            <h2>{course.courseTitle}</h2>

            <p><strong>Teacher:</strong> {course.teacher}</p>
            <p><strong>Credit:</strong> {course.credit}</p>
            <p><strong>Semester:</strong> {course.semester}</p>
            <p><strong>Status:</strong> {course.status}</p>

            <button className="details-btn">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
};

export default Mycourse;
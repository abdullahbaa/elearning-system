import { useState } from "react";
import "./CourseVideos.css";
const courseVideosData = [
  // THEORY COURSE VIDEOS
  {
    id: 1,
    courseCode: "CSE101",
    courseTitle: "Introduction to Programming",
    credit: 3,
    type: "Theory",
    videoTitle: "Introduction to Programming - Full Course",
    videoUrl: "https://www.youtube.com/embed/zOjov-2OZ0E"
  },
  {
    id: 2,
    courseCode: "CSE102",
    courseTitle: "Data Structures",
    credit: 3,
    type: "Theory",
    videoTitle: "Data Structures Complete Course",
    videoUrl: "https://www.youtube.com/embed/RBSGKlAvoiM"
  },
  {
    id: 3,
    courseCode: "CSE103",
    courseTitle: "Algorithms",
    credit: 3,
    type: "Theory",
    videoTitle: "Algorithms Full Tutorial",
    videoUrl: "https://www.youtube.com/embed/8hly31xKli0"
  },

  // Add remaining theory + lab courses same structure
  // You can continue until 57 total courses

  {
    id: 41,
    courseCode: "LAB201",
    courseTitle: "Programming Lab",
    credit: 1,
    type: "Lab",
    videoTitle: "Programming Lab Practice",
    videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw"
  },
  {
    id: 42,
    courseCode: "LAB202",
    courseTitle: "Data Structures Lab",
    credit: 1,
    type: "Lab",
    videoTitle: "Data Structures Lab Session",
    videoUrl: "https://www.youtube.com/embed/WUvTyaaNkzM"
  }
];
const CourseVideos = () => {
  const [search, setSearch] = useState("");

  const filteredVideos = courseVideosData.filter((course) =>
    course.courseTitle.toLowerCase().includes(search.toLowerCase()) ||
    course.courseCode.toLowerCase().includes(search.toLowerCase())
  );
const CourseVideos = () => {
    return (
    <div className="videos-container">
      <h1>All Course Videos</h1>

      <input
        type="text"
        placeholder="Search course video by name or code..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="video-grid">
        {filteredVideos.map((course) => (
          <div className="video-card" key={course.id}>
            <h3>{course.courseCode}</h3>
            <h2>{course.courseTitle}</h2>
            <p><strong>Credit:</strong> {course.credit}</p>
            <p><strong>Type:</strong> {course.type}</p>
            <p><strong>Video:</strong> {course.videoTitle}</p>

            <iframe
              width="100%"
              height="220"
              src={course.videoUrl}
              title={course.videoTitle}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

};

export default CourseVideos;
import React, { useState } from "react";

export default function App() {
  const [studentName, setStudentName] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const courses = [
    "React JS",
    "Node JS",
    "Python",
    "Java",
    "Data Science",
  ];

  const handleEnroll = (e) => {
    e.preventDefault();

    if (!studentName || !selectedCourse) {
      alert("Please fill all fields");
      return;
    }

    const newEnrollment = {
      name: studentName,
      course: selectedCourse,
    };

    setEnrolledCourses([...enrolledCourses, newEnrollment]);
    setStudentName("");
    setSelectedCourse("");
  };

  return (
    <div className="container">
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }
        .container {
          min-height: 100vh;
          background: linear-gradient(120deg, #89f7fe, #66a6ff);
          padding: 30px;
          text-align: center;
        }
        .card {
          background: white;
          max-width: 400px;
          margin: auto;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        h2 {
          color: #2c3e50;
        }
        input, select {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 6px;
          border: 1px solid #ccc;
        }
        button {
          width: 100%;
          padding: 10px;
          background: #2ecc71;
          border: none;
          color: white;
          font-size: 16px;
          border-radius: 6px;
          cursor: pointer;
        }
        button:hover {
          background: #27ae60;
        }
        .list {
          margin-top: 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .item {
          background: white;
          padding: 15px;
          border-radius: 10px;
          margin-bottom: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.15);
          text-align: left;
        }
      `}</style>

      <div className="card">
        <h2>Course Enrollment</h2>
        <form onSubmit={handleEnroll}>
          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />

          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>

          <button type="submit">Enroll</button>
        </form>
      </div>

      <div className="list">
        <h2>Enrolled Course List</h2>
        {enrolledCourses.map((item, index) => (
          <div className="item" key={index}>
            <strong>Name:</strong> {item.name} <br />
            <strong>Course:</strong> {item.course}
          </div>
        ))}
      </div>
    </div>
  );
}

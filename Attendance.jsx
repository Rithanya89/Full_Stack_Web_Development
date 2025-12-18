import React, { useState } from "react";

export default function Attendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", present: false },
    { id: 2, name: "Bob", present: false },
    { id: 3, name: "Charlie", present: false },
    { id: 4, name: "Diana", present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, present: !s.present } : s
      )
    );
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>📋 Attendance Tracker</h1>

      <div style={styles.grid}>
        {students.map((student) => (
          <div
            key={student.id}
            style={{
              ...styles.card,
              background: student.present
                ? "linear-gradient(135deg, #00c9a7, #007991)"
                : "linear-gradient(135deg, #ff416c, #ff4b2b)",
            }}
          >
            <h2>{student.name}</h2>
            <p>{student.present ? "Present ✅" : "Absent ❌"}</p>

            <button
              style={styles.button}
              onClick={() => toggleAttendance(student.id)}
            >
              Mark {student.present ? "Absent" : "Present"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    padding: "30px",
    textAlign: "center",
    color: "white",
    fontFamily: "Segoe UI, sans-serif",
  },
  title: {
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    transition: "transform 0.2s",
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

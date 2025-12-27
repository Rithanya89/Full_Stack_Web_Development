import React, { useState } from "react";

export default function Management() {
  const [page, setPage] = useState("dashboard");

  const students = [
    { id: 1, name: "Arun", course: "Computer Science", year: "3rd Year" },
    { id: 2, name: "Priya", course: "Information Technology", year: "2nd Year" },
    { id: 3, name: "Kiran", course: "Electronics", year: "4th Year" },
  ];

  const renderContent = () => {
    if (page === "dashboard") {
      return (
        <>
          <h2>📊 Dashboard Overview</h2>
          <p>Total Students: {students.length}</p>
        </>
      );
    }

    if (page === "students") {
      return (
        <>
          <h2>👩‍🎓 Student List</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.course}</td>
                  <td>{s.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }

    if (page === "about") {
      return (
        <>
          <h2>ℹ️ About</h2>
          <p>This is a simple student management dashboard built using React.</p>
        </>
      );
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.dashboard}>
        <h1 style={styles.heading}>🎓 Student Management</h1>

        {/* Navigation */}
        <nav style={styles.nav}>
          <button style={styles.navButton} onClick={() => setPage("dashboard")}>
            Dashboard
          </button>
          <button style={styles.navButton} onClick={() => setPage("students")}>
            Students
          </button>
          <button style={styles.navButton} onClick={() => setPage("about")}>
            About
          </button>
        </nav>

        {/* Content */}
        <div style={styles.content}>{renderContent()}</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
    padding: "20px",
  },
  dashboard: {
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: "650px",
    padding: "30px",
    borderRadius: "18px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  nav: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
  navButton: {
    padding: "10px 15px",
    backgroundColor: "#66a6ff",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
  },
  content: {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "12px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
  },
};

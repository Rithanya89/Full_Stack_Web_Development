import React, { useState } from "react";

export default function Workshop() {
  const [data, setData] = useState({
    name: "",
    email: "",
    workshop: "",
    level: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Registration Form */}
        <div style={styles.card}>
          <h2 style={styles.heading}>📝 Workshop Registration</h2>

          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Participant Name"
            value={data.name}
            onChange={handleChange}
          />

          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
            value={data.email}
            onChange={handleChange}
          />

          <select
            style={styles.input}
            name="workshop"
            value={data.workshop}
            onChange={handleChange}
          >
            <option value="">Select Workshop</option>
            <option>React Basics</option>
            <option>Advanced JavaScript</option>
            <option>UI/UX Design</option>
            <option>Cloud Computing</option>
          </select>

          <select
            style={styles.input}
            name="level"
            value={data.level}
            onChange={handleChange}
          >
            <option value="">Experience Level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <button
            style={styles.button}
            onClick={() => alert("✅ Registration Submitted Successfully!")}
          >
            Submit
          </button>
        </div>

        {/* Live Preview */}
        <div style={{ ...styles.card, backgroundColor: "#f0f9ff" }}>
          <h2 style={styles.heading}>🔍 Live Preview</h2>
          <p><b>Name:</b> {data.name || "-"}</p>
          <p><b>Email:</b> {data.email || "-"}</p>
          <p><b>Workshop:</b> {data.workshop || "-"}</p>
          <p><b>Level:</b> {data.level || "-"}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  wrapper: {
    display: "flex",
    gap: "30px",
  },
  card: {
    width: "320px",
    padding: "25px",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#ff758c",
    color: "white",
    border: "none",
    borderRadius: "20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

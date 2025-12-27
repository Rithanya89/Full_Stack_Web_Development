import React, { useState } from "react";

export default function Alert() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.event) {
      alert("⚠️ Please fill all the fields!");
      return;
    }

    const confirmRegistration = confirm(
      `Confirm Registration Details:
      
Name: ${formData.name}
Email: ${formData.email}
Event: ${formData.event}

Proceed with registration?`
    );

    if (confirmRegistration) {
      alert("✅ Registration Successful!\nThank you for registering 🎉");
      setFormData({ name: "", email: "", event: "" });
    } else {
      alert("❌ Registration Cancelled");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h1 style={styles.heading}>🎉 Event Registration</h1>

        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <select
          style={styles.input}
          name="event"
          value={formData.event}
          onChange={handleChange}
        >
          <option value="">Select Event</option>
          <option>Technical Workshop</option>
          <option>Coding Contest</option>
          <option>Cultural Fest</option>
          <option>Seminar</option>
        </select>

        <button style={styles.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "35px",
    borderRadius: "15px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
  },
  heading: {
    marginBottom: "25px",
    color: "#2c3e50",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

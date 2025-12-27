import React, { useState } from "react";

export default function Rating() {
  const [feedback, setFeedback] = useState({
    name: "",
    rating: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!feedback.name || !feedback.rating || !feedback.comments) {
      alert("⚠️ Please fill all the fields!");
      return;
    }

    alert(
      `✅ Feedback Submitted Successfully!

Student Name: ${feedback.name}
Rating: ${feedback.rating}/5
Comments: ${feedback.comments}`
    );

    setFeedback({ name: "", rating: "", comments: "" });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>📝 Student Feedback</h1>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Student Name"
            value={feedback.name}
            onChange={handleChange}
          />

          <select
            style={styles.input}
            name="rating"
            value={feedback.rating}
            onChange={handleChange}
          >
            <option value="">Select Rating</option>
            <option value="1">⭐ 1 - Poor</option>
            <option value="2">⭐⭐ 2 - Fair</option>
            <option value="3">⭐⭐⭐ 3 - Good</option>
            <option value="4">⭐⭐⭐⭐ 4 - Very Good</option>
            <option value="5">⭐⭐⭐⭐⭐ 5 - Excellent</option>
          </select>

          <textarea
            style={styles.textarea}
            name="comments"
            placeholder="Enter your feedback comments"
            value={feedback.comments}
            onChange={handleChange}
          />

          <button style={styles.button} type="submit">
            Submit Feedback
          </button>
        </form>
      </div>
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
    width: "360px",
    borderRadius: "16px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
    textAlign: "center",
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
  textarea: {
    width: "100%",
    padding: "12px",
    height: "90px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    resize: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    roll: "",
    course: "",
    exam: "",
    date: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `Registration Successful!\n\nName: ${form.name}\nRoll No: ${form.roll}\nCourse: ${form.course}\nExam: ${form.exam}\nDate: ${form.date}`
    );
    setForm({ name: "", roll: "", course: "", exam: "", date: "" });
  }

  return (
    <div style={styles.container}>
      <h2>Exam Registration Form</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="roll"
          placeholder="Roll Number"
          value={form.roll}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={form.course}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="exam"
          placeholder="Exam Name"
          value={form.exam}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
    backgroundColor: "#f9f9f9"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }
};

export default App;

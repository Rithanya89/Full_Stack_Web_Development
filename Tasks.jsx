import React, { useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 Task List Dashboard</h1>

      <div style={styles.box}>
        <div style={styles.inputRow}>
          <input
            type="text"
            placeholder="Enter task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={styles.input}
          />
          <button onClick={addTask} style={styles.addBtn}>
            Add
          </button>
        </div>

        {tasks.length === 0 && (
          <p style={{ color: "#888" }}>No tasks yet</p>
        )}

        {tasks.map(task => (
          <div key={task.id} style={styles.task}>
            <span>{task.text}</span>
            <button
              style={styles.deleteBtn}
              onClick={() => removeTask(task.id)}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Segoe UI, sans-serif",
  },
  heading: {
    color: "white",
    marginBottom: "20px",
  },
  box: {
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },
  inputRow: {
    display: "flex",
    marginBottom: "15px",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  addBtn: {
    background: "#667eea",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  task: {
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteBtn: {
    background: "#ff4b2b",
    border: "none",
    color: "white",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    cursor: "pointer",
  },
};

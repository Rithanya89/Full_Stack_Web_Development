import React, { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!login.username || !login.password || !login.role) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    if (login.role === "Admin") {
      alert("✅ Welcome Admin! Redirecting to Admin Dashboard...");
    } else if (login.role === "User") {
      alert("✅ Welcome User! Redirecting to User Home Page...");
    } else if (login.role === "Guest") {
      alert("✅ Welcome Guest! Redirecting to Guest Page...");
    }

    // Simulated redirection
    setLogin({ username: "", password: "", role: "" });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🔐 Login</h1>

        <form onSubmit={handleLogin}>
          <input
            style={styles.input}
            type="text"
            name="username"
            placeholder="Username"
            value={login.username}
            onChange={handleChange}
          />

          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
          />

          <select
            style={styles.input}
            name="role"
            value={login.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option>Admin</option>
            <option>User</option>
            <option>Guest</option>
          </select>

          <button style={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #36d1dc, #5b86e5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "35px",
    width: "350px",
    borderRadius: "15px",
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
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#36d1dc",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

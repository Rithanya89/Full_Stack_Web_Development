import React, { useState } from "react";

export default function Authentication() {
  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });

  // Dummy credentials (for simulation)
  const validUser = {
    username: "admin",
    password: "12345",
  };

  const handleChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!auth.username || !auth.password) {
      alert("⚠️ Error: All fields are required!");
      return;
    }

    if (
      auth.username === validUser.username &&
      auth.password === validUser.password
    ) {
      alert("✅ Login Successful! Welcome Admin 🎉");
    } else {
      alert("❌ Authentication Failed!\nInvalid Username or Password");
    }

    setAuth({ username: "", password: "" });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🔐 Authentication</h1>

        <form onSubmit={handleLogin}>
          <input
            style={styles.input}
            type="text"
            name="username"
            placeholder="Username"
            value={auth.username}
            onChange={handleChange}
          />

          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            value={auth.password}
            onChange={handleChange}
          />

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
    background: "linear-gradient(135deg, #f093fb, #f5576c)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "35px",
    width: "340px",
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
    backgroundColor: "#f5576c",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

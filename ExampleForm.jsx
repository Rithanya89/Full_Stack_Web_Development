import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    // Username
    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
    }

    // Email
    if (formData.email === "") {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password
    if (formData.password === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(formData.password)) {
      newErrors.password = "Password must contain uppercase, lowercase, number and special character";
    }

    // Confirm Password
    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Phone
    if (formData.phone === "") {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9][0-9]{9}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    // Terms
    if (!formData.terms) {
      newErrors.terms = "Please accept terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Login Successful");
      console.log(formData);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Login Form</h2>

        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <p style={styles.error}>{errors.username}</p>

        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <p style={styles.error}>{errors.email}</p>

        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <p style={styles.error}>{errors.password}</p>

        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
        <p style={styles.error}>{errors.confirmPassword}</p>

        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        <p style={styles.error}>{errors.phone}</p>

        <label>
          <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} /> Accept Terms & Conditions
        </label>
        <p style={styles.error}>{errors.terms}</p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  form: {
    width: "320px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
  },
  error: {
    color: "red",
    fontSize: "12px",
    margin: "2px 0 8px 0",
  },
};

export default App;

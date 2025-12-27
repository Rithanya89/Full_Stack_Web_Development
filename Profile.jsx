import React, { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!profile.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!profile.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(profile.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!profile.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(profile.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert(
        `✅ Profile Updated Successfully!
        
Name: ${profile.name}
Email: ${profile.email}
Phone: ${profile.phone}`
      );
    } else {
      alert("❌ Please fix the errors before saving.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>👤 Edit Profile</h1>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Full Name"
            value={profile.name}
            onChange={handleChange}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}

          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
            value={profile.email}
            onChange={handleChange}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          <input
            style={styles.input}
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={profile.phone}
            onChange={handleChange}
          />
          {errors.phone && <p style={styles.error}>{errors.phone}</p>}

          <button style={styles.button} type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "35px",
    borderRadius: "16px",
    width: "360px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#2c3e50",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    backgroundColor: "#43cea2",
    color: "white",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "13px",
    marginBottom: "8px",
  },
};

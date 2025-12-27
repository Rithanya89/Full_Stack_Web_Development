import React, { useState } from "react";

export default function Category() {
  const [category, setCategory] = useState("electronics");

  const products = {
    electronics: ["Laptop", "Smartphone", "Headphones"],
    clothing: ["T-Shirt", "Jeans", "Jacket"],
    books: ["React Guide", "JavaScript Basics", "Web Design"],
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🛍️ Product Browser</h1>

        {/* Navigation */}
        <div style={styles.nav}>
          <button
            style={styles.button}
            onClick={() => setCategory("electronics")}
          >
            Electronics
          </button>
          <button
            style={styles.button}
            onClick={() => setCategory("clothing")}
          >
            Clothing
          </button>
          <button style={styles.button} onClick={() => setCategory("books")}>
            Books
          </button>
        </div>

        {/* Product List */}
        <div style={styles.list}>
          <h3>{category.toUpperCase()}</h3>
          {products[category].map((item, index) => (
            <div key={index} style={styles.product}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    width: "380px",
    padding: "30px",
    borderRadius: "18px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    color: "#2c3e50",
  },
  nav: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
  button: {
    padding: "8px 14px",
    backgroundColor: "#ff758c",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
  },
  list: {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    borderRadius: "12px",
  },
  product: {
    backgroundColor: "#ffeaa7",
    padding: "8px",
    borderRadius: "8px",
    marginTop: "8px",
    fontSize: "14px",
  },
};

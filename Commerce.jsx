import React, { useState } from "react";

export default function Commerce() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 1999 },
    { id: 2, name: "Smart Watch", price: 2999 },
    { id: 3, name: "Bluetooth Speaker", price: 1499 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.shop}>
        <h1 style={styles.heading}>🛍️ Online Store</h1>

        {/* Product List */}
        <div style={styles.productList}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button
                style={styles.button}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div style={styles.cart}>
          <h3>🛒 Cart ({cart.length})</h3>
          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cart.map((item, index) => (
              <p key={index}>
                {item.name} – ₹{item.price}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Poppins, sans-serif",
  },
  shop: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "18px",
    width: "100%",
    maxWidth: "600px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#2c3e50",
  },
  productList: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    width: "160px",
    borderRadius: "12px",
    textAlign: "center",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#6a11cb",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
  },
  cart: {
    marginTop: "25px",
    padding: "15px",
    backgroundColor: "#eef2ff",
    borderRadius: "12px",
  },
};

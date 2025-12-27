import React from "react";

export default function Cab() {
  const bookCab = () => {
    alert("Welcome to Online Cab Booking 🚕");

    // User Inputs
    let name = prompt("Enter your Name:");
    let pickup = prompt("Enter Pickup Location:");
    let drop = prompt("Enter Drop Location:");
    let distance = prompt("Enter Distance (in KM):");

    let cabType = prompt(
      "Select Cab Type:\n1. Mini (₹10/km)\n2. Sedan (₹15/km)\n3. SUV (₹20/km)"
    );

    let rate = 0;
    let cabName = "";

    if (cabType === "1") {
      rate = 10;
      cabName = "Mini";
    } else if (cabType === "2") {
      rate = 15;
      cabName = "Sedan";
    } else if (cabType === "3") {
      rate = 20;
      cabName = "SUV";
    } else {
      alert("Invalid cab selection!");
      return;
    }

    let fare = distance * rate;

    // Confirmation
    let confirmBooking = confirm(
      `Booking Details:
Name: ${name}
Cab Type: ${cabName}
Pickup: ${pickup}
Drop: ${drop}
Distance: ${distance} KM
Total Fare: ₹${fare}

Confirm Booking?`
    );

    if (confirmBooking) {
      alert(
        `✅ Booking Confirmed!
Thank you ${name}
Your ${cabName} cab is on the way 🚖
Total Fare: ₹${fare}`
      );
    } else {
      alert("❌ Booking Cancelled");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚕 Online Cab Booking</h1>
      <p style={styles.text}>Book your ride instantly using dialog boxes</p>
      <button style={styles.button} onClick={bookCab}>
        Book Cab
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  heading: {
    color: "#2c3e50",
    fontSize: "36px",
    marginBottom: "10px",
  },
  text: {
    color: "#34495e",
    fontSize: "18px",
    marginBottom: "25px",
  },
  button: {
    padding: "15px 30px",
    fontSize: "18px",
    border: "none",
    borderRadius: "30px",
    backgroundColor: "#6a11cb",
    color: "white",
    cursor: "pointer",
    boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
  },
};

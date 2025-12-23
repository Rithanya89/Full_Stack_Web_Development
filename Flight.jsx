import React from "react";

export default function Flight() {
  const handleBooking = () => {
    // Prompt dialogs for user input
    const name = prompt("Enter Passenger Name:");
    if (!name) {
      alert("Name is required!");
      return;
    }

    const destination = prompt("Enter Destination:");
    if (!destination) {
      alert("Destination is required!");
      return;
    }

    const seats = prompt("Enter Number of Seats:");
    if (!seats || isNaN(seats)) {
      alert("Please enter a valid number of seats!");
      return;
    }

    // Confirmation dialog
    const confirmBooking = window.confirm(
      `Confirm Booking?\n\nPassenger: ${name}\nDestination: ${destination}\nSeats: ${seats}`
    );

    if (confirmBooking) {
      alert(
        `🎉 Booking Successful!\n\nPassenger: ${name}\nDestination: ${destination}\nSeats: ${seats}`
      );
    } else {
      alert("❌ Booking Cancelled!");
    }
  };

  return (
    <div className="container">
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .container {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ff6a00, #ee0979, #00c6ff);
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          width: 320px;
        }

        h2 {
          color: #ee0979;
          margin-bottom: 10px;
        }

        p {
          color: #444;
          margin-bottom: 20px;
        }

        button {
          padding: 12px 20px;
          font-size: 16px;
          background: linear-gradient(to right, #ff6a00, #ee0979);
          border: none;
          border-radius: 25px;
          color: white;
          cursor: pointer;
          transition: transform 0.2s;
        }

        button:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div className="card">
        <h2>✈️ Flight Ticket Booking</h2>
        <p>Book your flight using dialog boxes</p>
        <button onClick={handleBooking}>Book Ticket</button>
      </div>
    </div>
  );
}

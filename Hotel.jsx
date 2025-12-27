import React from "react";

export default function Hotel() {
  const reserveRoom = () => {
    // Prompt dialogs
    const guestName = prompt("Enter Guest Name:");
    if (!guestName) {
      alert("Guest name is required!");
      return;
    }

    const roomType = prompt("Enter Room Type (Single / Double / Deluxe):");
    if (!roomType) {
      alert("Room type is required!");
      return;
    }

    const nights = prompt("Enter Number of Nights:");
    if (!nights || isNaN(nights)) {
      alert("Please enter a valid number of nights!");
      return;
    }

    // Confirmation dialog
    const confirmReservation = window.confirm(
      `Confirm Reservation?\n\nGuest: ${guestName}\nRoom Type: ${roomType}\nNights: ${nights}`
    );

    if (confirmReservation) {
      alert(
        `✅ Reservation Successful!\n\nGuest: ${guestName}\nRoom: ${roomType}\nStay: ${nights} night(s)`
      );
    } else {
      alert("❌ Reservation Cancelled!");
    }
  };

  return (
    <div className="container">
      <style>{`
        body {
          margin: 0;
        }

        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2, #ff758c);
          font-family: 'Segoe UI', sans-serif;
        }

        .card {
          background: #ffffff;
          padding: 35px;
          width: 350px;
          border-radius: 18px;
          text-align: center;
          box-shadow: 0 15px 30px rgba(0,0,0,0.35);
        }

        h1 {
          font-family: 'Georgia', serif;
          color: #764ba2;
          margin-bottom: 10px;
        }

        p {
          font-family: 'Courier New', monospace;
          color: #444;
          margin-bottom: 25px;
          font-size: 15px;
        }

        button {
          padding: 14px 24px;
          font-size: 16px;
          font-family: 'Trebuchet MS', sans-serif;
          background: linear-gradient(to right, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        button:hover {
          background: linear-gradient(to right, #ff758c, #ff7eb3);
          transform: scale(1.07);
        }
      `}</style>

      <div className="card">
        <h1>🏨 Hotel Reservation</h1>
        <p>Reserve your room using JavaScript dialog boxes</p>
        <button onClick={reserveRoom}>Reserve Room</button>
      </div>
    </div>
  );
}

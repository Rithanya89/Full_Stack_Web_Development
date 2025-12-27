import React, { useState } from "react";

export default function Notification() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      message: "🔔 You have a new notification!",
    };
    setNotifications([newNotification, ...notifications]);
  };

  const clearNotifications = () => {
    setNotifications([]);
    alert("✅ All notifications cleared");
  };

  return (
    <div style={styles.container}>
      <div style={styles.dashboard}>
        <h1 style={styles.heading}>📊 Dashboard</h1>

        <div style={styles.buttons}>
          <button style={styles.button} onClick={addNotification}>
            Add Notification
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#e74c3c" }}
            onClick={clearNotifications}
          >
            Clear All
          </button>
        </div>

        <div style={styles.notificationBox}>
          <h3>🔔 Notifications ({notifications.length})</h3>

          {notifications.length === 0 ? (
            <p>No new notifications</p>
          ) : (
            notifications.map((note) => (
              <div key={note.id} style={styles.notification}>
                {note.message}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  dashboard: {
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
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#f39c12",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    fontSize: "14px",
    cursor: "pointer",
  },
  notificationBox: {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    borderRadius: "12px",
    minHeight: "120px",
  },
  notification: {
    backgroundColor: "#ffeaa7",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "8px",
    fontSize: "14px",
  },
};

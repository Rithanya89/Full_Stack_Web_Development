import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea, #764ba2);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px;
          color: #fff;
        }
        .form-card {
          background: #ffffff;
          color: #333;
          padding: 25px;
          border-radius: 12px;
          width: 350px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        .form-card h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #764ba2;
        }
        input, textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }
        textarea {
          resize: none;
        }
        button {
          width: 100%;
          padding: 10px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          color: white;
          font-size: 16px;
          border-radius: 6px;
          cursor: pointer;
        }
        button:hover {
          opacity: 0.9;
        }
        .feedback-list {
          margin-top: 30px;
          width: 80%;
          max-width: 600px;
        }
        .feedback-card {
          background: #fff;
          color: #333;
          padding: 15px;
          border-radius: 10px;
          margin-bottom: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.15);
        }
        .feedback-card h4 {
          margin: 0;
          color: #667eea;
        }
        .feedback-card p {
          margin: 5px 0;
        }
      `}</style>

      <div className="form-card">
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Feedback"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      </div>

      <div className="feedback-list">
        {submittedData.map((item, index) => (
          <div className="feedback-card" key={index}>
            <h4>{item.name}</h4>
            <p><strong>Email:</strong> {item.email}</p>
            <p>{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

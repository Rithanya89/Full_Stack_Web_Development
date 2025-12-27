import React, { useState } from "react";

export default function Blog() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      alert("⚠️ Please enter a comment");
      return;
    }
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.blogCard}>
        <h1 style={styles.title}>📝 My Tech Blog</h1>
        <p style={styles.content}>
          React makes it easy to build interactive UIs. In this blog, users can
          post comments and see them update instantly without reloading the page.
        </p>

        {/* Comment Form */}
        <form onSubmit={addComment} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button style={styles.button} type="submit">
            Post
          </button>
        </form>

        {/* Comment List */}
        <div style={styles.commentBox}>
          <h3>💬 Comments ({comments.length})</h3>
          {comments.length === 0 ? (
            <p>No comments yet</p>
          ) : (
            comments.map((c, index) => (
              <div key={index} style={styles.comment}>
                {c}
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
    minHeight: "100vh",
    background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Poppins, sans-serif",
  },
  blogCard: {
    backgroundColor: "#ffffff",
    maxWidth: "600px",
    width: "100%",
    padding: "30px",
    borderRadius: "18px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  },
  title: {
    color: "#2c3e50",
    marginBottom: "15px",
    textAlign: "center",
  },
  content: {
    fontSize: "16px",
    marginBottom: "25px",
    lineHeight: "1.6",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    padding: "10px 18px",
    backgroundColor: "#6a11cb",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  },
  commentBox: {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    borderRadius: "12px",
  },
  comment: {
    backgroundColor: "#e3f2fd",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "8px",
    fontSize: "14px",
  },
};

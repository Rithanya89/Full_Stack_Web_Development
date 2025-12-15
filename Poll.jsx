import React, { useState } from "react";

export default function Poll() {
  const [votes, setVotes] = useState({
    OptionA: 0,
    OptionB: 0,
    OptionC: 0,
    OptionD: 0,
  });

  const totalVotes =
    votes.OptionA + votes.OptionB + votes.OptionC + votes.OptionD;

  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  const getPercentage = (count) => {
    if (totalVotes === 0) return 0;
    return ((count / totalVotes) * 100).toFixed(1);
  };

  return (
    <div className="poll-container">
      <style>{`
        .poll-container {
          width: 400px;
          margin: 50px auto;
          padding: 20px;
          border-radius: 10px;
          background-color: #f5f7fa;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .option-btn {
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border: none;
          border-radius: 5px;
          background-color: #4caf50;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        .option-btn:hover {
          background-color: #43a047;
        }

        .result {
          margin-top: 15px;
          font-size: 14px;
        }

        .bar {
          height: 10px;
          background-color: #2196f3;
          border-radius: 5px;
          margin-top: 4px;
        }

        .total {
          text-align: center;
          margin-top: 20px;
          font-weight: bold;
        }
      `}</style>

      <h2>Classroom Live Poll</h2>
      <p><b>Question:</b> Which technology do you like most?</p>

      <button className="option-btn" onClick={() => handleVote("OptionA")}>
        React
      </button>
      <button className="option-btn" onClick={() => handleVote("OptionB")}>
        Angular
      </button>
      <button className="option-btn" onClick={() => handleVote("OptionC")}>
        Vue
      </button>
      <button className="option-btn" onClick={() => handleVote("OptionD")}>
        Svelte
      </button>

      <div className="result">
        React: {votes.OptionA} votes ({getPercentage(votes.OptionA)}%)
        <div className="bar" style={{ width: `${getPercentage(votes.OptionA)}%` }} />
      </div>

      <div className="result">
        Angular: {votes.OptionB} votes ({getPercentage(votes.OptionB)}%)
        <div className="bar" style={{ width: `${getPercentage(votes.OptionB)}%` }} />
      </div>

      <div className="result">
        Vue: {votes.OptionC} votes ({getPercentage(votes.OptionC)}%)
        <div className="bar" style={{ width: `${getPercentage(votes.OptionC)}%` }} />
      </div>

      <div className="result">
        Svelte: {votes.OptionD} votes ({getPercentage(votes.OptionD)}%)
        <div className="bar" style={{ width: `${getPercentage(votes.OptionD)}%` }} />
      </div>

      <div className="total">Total Votes: {totalVotes}</div>
    </div>
  );
}

import React, { useState } from "react";

export default function QuizApp() {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "Hyper Text Marketing Language",
        "Hyper Tool Multi Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which hook is used for state in React?",
      options: ["useData", "useState", "useEffect", "useRef"],
      answer: "useState",
    },
    {
      question: "Which company developed React?",
      options: ["Google", "Facebook", "Microsoft", "Amazon"],
      answer: "Facebook",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected("");
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      <style>{`
        body {
          background: #f4f6f9;
          font-family: Arial, sans-serif;
        }
        .quiz-container {
          width: 420px;
          margin: 60px auto;
          background: #fff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
          margin-bottom: 15px;
        }
        .score {
          text-align: right;
          font-weight: bold;
          color: #2c3e50;
        }
        .option {
          display: block;
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border-radius: 8px;
          border: 1px solid #ccc;
          background: #f9f9f9;
          cursor: pointer;
          transition: 0.3s;
        }
        .option:hover {
          background: #e3f2fd;
        }
        .option.selected {
          background: #bbdefb;
          border-color: #2196f3;
        }
        .next-btn {
          margin-top: 15px;
          padding: 10px 15px;
          background: #2196f3;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          width: 100%;
        }
        .next-btn:hover {
          background: #1976d2;
        }
        .result {
          text-align: center;
        }
      `}</style>

      {!showResult ? (
        <>
          <div className="score">Score: {score}</div>
          <h2>{questions[current].question}</h2>
          {questions[current].options.map((option, index) => (
            <button
              key={index}
              className={`option ${selected === option ? "selected" : ""}`}
              onClick={() => handleOptionClick(option)}
              disabled={selected !== ""}
            >
              {option}
            </button>
          ))}
          <button className="next-btn" onClick={nextQuestion} disabled={!selected}>
            {current === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </>
      ) : (
        <div className="result">
          <h2>Quiz Completed 🎉</h2>
          <p>Your Score: {score} / {questions.length}</p>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import QUESTIONS from "./../questions";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  };

  return (
    <div id="quiz">
      <div id="question">
        <h1>{QUESTIONS[activeQuestionIndex].text}</h1>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer, index) => (
            <li key={index} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;

import React, { useState } from "react";
import QUESTIONS from "./../questions";
import QuizComplete from "./../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplet = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  };

  if (quizIsComplet) {
    return (
      <div id="summary">
        <img src={QuizComplete} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeout={() => handleSelectAnswer(null)}
        />
        <h1>{QUESTIONS[activeQuestionIndex].text}</h1>
        <ul id="answers">
          {shuffledAnswers.map((answer, index) => (
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

import React from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h1>{questionText}</h1>
      <Answers
        question
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}

export default Question;

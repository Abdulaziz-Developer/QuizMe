import React from "react";

const QuizItem = ({ question }) => {
  const listOfAnswers = question.answers.map((questionAnswer) => {
    return <h4>{questionAnswer.answer}</h4>;
  });
  return (
    <div>
      <h3>{question.words}</h3>
      <div>{listOfAnswers}</div>
    </div>
  );
};

export default QuizItem;

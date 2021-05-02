import { observer } from "mobx-react";
import React, { useEffect, useRef, useState } from "react";
import AnswerItem from "../AnswerItem";
import { Redirect } from "react-router";
import answerStore from "../stores/answerStore";

const Quiz = ({ timer, setTimer, formatTime, questions }) => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [index, setIndex] = useState(0);

  if (index === questions.length) {
    return <Redirect to="/result" />;
  }

  let question = questions[index];

  let listOfAnswer = question.answers.map((questionAnswer) => {
    return (
      <AnswerItem
        setTimer={setTimer}
        question={question.words}
        key={questionAnswer.answer}
        setIsAnswered={setIsAnswered}
        questions={questions}
        questionAnswer={questionAnswer}
      />
    );
  });

  let correctAnswer = question.answers.map((questionAnswer) => {
    if (questionAnswer.type === true) {
      return (
        <AnswerItem
          correct
          key={questionAnswer.answer}
          question={question.words}
          questions={questions}
          questionAnswer={questionAnswer}
        />
      );
    }
  });

  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  // shuffle(listOfAnswer);

  const next = () => {
    answerStore.addTimer(timer);
    setIsAnswered(false);
    setIndex(index + 1);
    setTimer(0);
  };

  return (
    <div className="container2">
      <h2>{formatTime()}</h2>

      <h3 className="question-name">{question.words}</h3>
      <div className="answers-list">
        {isAnswered ? correctAnswer : listOfAnswer}
      </div>
      {isAnswered && (
        <button className="next-q" onClick={() => next()}>
          Next
        </button>
      )}
    </div>
  );
};

export default observer(Quiz);

import { observer } from "mobx-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Stroe
import answerStore from "../stores/answerStore";

const Result = () => {
  const [counter, setCounter] = useState(0);
  setCounter(counter + 1);
  const { correctAnswers } = answerStore;
  const { incorrectAnswers } = answerStore;

  const { resultQestions } = answerStore;
  const answers = resultQestions.map((question) => question.a);

  let correct = [];
  const countCorrect = (arr1, arr2) => {
    arr1.forEach((e1) =>
      arr2.forEach((e2) => {
        if (e1 === e2) {
          correct.push(e1);
        }
      })
    );
  };

  let incorrect = [];
  const countIncorrect = (arr1, arr2) => {
    arr1.forEach((e1) =>
      arr2.forEach((e2) => {
        if (e1 === e2) {
          incorrect.push(e1);
        }
      })
    );
  };

  const formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    return ` ${getMinutes} : ${getSeconds}`;
  };

  let { timers } = answerStore;

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let totalsum = timers ?? timers.reduce(reducer);

  countCorrect(answers, correctAnswers);
  countIncorrect(answers, incorrectAnswers);

  const list = resultQestions.map((questoin) => {
    let boolean;
    if (correctAnswers.includes(questoin.a)) {
      boolean = "correct answer";
    } else {
      boolean = "incorrect answer";
    }
    return (
      <h5>
        Question: {questoin.q} Your answer: {questoin.a}, {boolean}
      </h5>
    );
  });

  return (
    <div className="container">
      <div className="result-wrapper">
        <h2 className="result-title">total time:{formatTime(totalsum)}</h2>
        <h2 className="result-title">
          Average time: {(totalsum / answers.length).toFixed(2)}
        </h2>
        <h2 className="result-title">Answer Correct: {correct.length}</h2>
        <h2 className="result-title">Answer Incorrect: {incorrect.length}</h2>

        <h2 className="result-many-q">Your Answers: {list}</h2>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default observer(Result);

import { observer } from "mobx-react";
import { Redirect } from "react-router";

import React, { useState } from "react";

// Store
import answerStore from "../stores/answerStore";

const AnswerItem = ({
  setTimer,
  questionAnswer,
  setIsAnswered,
  question,
  correct,
}) => {
  let [rightAnswer, setRightAnswer] = useState(null);

  let correctAudio = new Audio("/assets/correct.mp3");
  let incorrectAudio = new Audio("/assets/incorrect.mp3");

  const checkAnswer = () => {
    answerStore.addResultQuestions({
      q: question,
      a: questionAnswer.answer,
    });
    setIsAnswered(true);
    if (questionAnswer.type === true) {
      setRightAnswer(true);
      correctAudio.play();
      answerStore.addCorrectAnswer(questionAnswer.answer);
    } else {
      setRightAnswer(false);
      incorrectAudio.play();
      answerStore.addInCorrectAnswer(questionAnswer.answer);
    }
  };

  if (correct) {
    return (
      <>
        <button className="answer-button">
          <h4>{questionAnswer.answer}</h4>
          <h5>was the right answer</h5>
        </button>
      </>
    );
  } else {
    return (
      <>
        <button className="answer-button" onClick={() => checkAnswer()}>
          <h4>{questionAnswer.answer}</h4>
        </button>
      </>
    );
  }
};

export default observer(AnswerItem);

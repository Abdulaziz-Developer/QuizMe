import { observer } from "mobx-react";

const QuestionItem = ({ question }) => {
  const correctAnswer = question.answers.filter(
    (questionAnswer) => questionAnswer.type === true
  );

  return (
    <div className="question">
      <h6 className="question-text">Q: {question.words}</h6>
      <h6 className="question-text">A: {correctAnswer[0].answer}</h6>
    </div>
  );
};

export default observer(QuestionItem);

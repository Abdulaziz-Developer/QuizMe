import { observer } from "mobx-react";

const QuestionItem = ({ question }) => {
  console.log(
    "🚀 ~ file: index.js ~ line 4 ~ QuestionItem ~ question",
    question
  );
  return (
    <div className="question">
      <h6 className="question-text">{question}</h6>
    </div>
  );
};

export default observer(QuestionItem);

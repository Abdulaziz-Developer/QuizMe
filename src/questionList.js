import QuestionItem from "./questionItem";
import { observer } from "mobx-react";

const questionList = ({ questions }) => {
  return (
    <div className="questions">
      <QuestionItem questions={questions} />
    </div>
  );
};

export default observer(questionList);

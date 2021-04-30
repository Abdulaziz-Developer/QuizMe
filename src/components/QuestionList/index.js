import { observer } from "mobx-react";
import QuestionItem from "../QuestionItem";

// Data
import questions from "../../data";

const QuestionList = () => {
  const list = questions.map((question) => {
    return <QuestionItem question={question} key={question.question} />;
  });

  return <div className="questions">{list}</div>;
};

export default observer(QuestionList);

import { observer } from "mobx-react";

const questionItem = ({ questions }) => {
  const questionlist = questions.map((question, index) => {
    return (
      <div className="question" key={index}>
        <h6 className="question-text">{question}</h6>
        {/* <h5 className="answer-text">{question.age}</h5> */}
      </div>
    );
  });
  return <>{questionlist}</>;
};

export default observer(questionItem);

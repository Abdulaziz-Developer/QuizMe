import { observer } from "mobx-react";
import QuestionItem from "../QuestionItem";

// Styles
import { Link } from "react-router-dom";

const QuestionList = ({ handleStart, questions }) => {
  const list = questions.map((question) => {
    return <QuestionItem question={question} key={question.words} />;
  });

  return (
    <div className="container">
      <div className="questions">{list}</div>
      <div className="wrapper">
        <div className="inputs">
          <span>
            <Link to="/add">
              <button>Add</button>
            </Link>
          </span>
        </div>

        <span className="start-quiz-span">
          <Link to="/quiz">
            <button onClick={handleStart} className="start-quiz">
              Start Quiz
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default observer(QuestionList);

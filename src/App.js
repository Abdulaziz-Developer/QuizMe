import { useState } from "react";
import QuestionList from "./questionList";
import { observer } from "mobx-react";
import questionsStore from "./questionsStore";

function App() {
  const { questions } = questionsStore;

  const [question, setQuest] = useState({});

  const sendQuestion = () => {
    questionsStore.addQuestion(question);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="questions">
          <QuestionList questions={questions} />
        </div>
        <div className="inputs">
          <span>
            <button onClick={sendQuestion}>Send</button>
          </span>
          <input
            placeholder="ما السؤال الذي تريد إضافه"
            onChange={(e) => setQuest(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default observer(App);

import React, { useRef, useState } from "react";
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

// Store
import answerStore from "../stores/answerStore";

// Components
import Quiz from "../Quiz";
import QuestionList from "../QuestionList";
import Result from "../Result";
import AddQuestion from "../AddQuestion";

const Routes = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);

  const { questions } = answerStore;
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

  // shuffle(questions);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = async () => {
    clearInterval(increment.current);
    setIsPaused(false);
    // await swal("Write something here:", {
    //   content: "input",
    // }).then((value) =>
    //   noteStore.addNote({ para: value, time: formatTime(), date: Date() })
    // );
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    return ` ${getMinutes} : ${getSeconds}`;
  };

  return (
    <Switch>
      <Route exact path="/">
        <QuestionList handleStart={handleStart} questions={questions} />
      </Route>
      <Route exact path="/quiz">
        <Quiz
          timer={timer}
          setTimer={setTimer}
          handlePause={handlePause}
          formatTime={formatTime}
          questions={questions}
        />
      </Route>
      <Route exact path="/result">
        <Result />
      </Route>
      <Route exact path="/add">
        <AddQuestion questions={questions} />
      </Route>
    </Switch>
  );
};

export default observer(Routes);

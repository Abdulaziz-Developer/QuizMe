import { makeAutoObservable, autorun } from "mobx";
import localStorage from "mobx-localstorage";

class AnswerStore {
  questions = [
    {
      words: "How old are u?",
      answers: [
        {
          answer: "16",
          type: true,
        },
        {
          answer: "12",
          type: false,
        },
        {
          answer: "10",
          type: false,
        },
        {
          answer: "9",
          type: false,
        },
      ],
    },

    {
      words: "what is ur name?",
      answers: [
        {
          answer: "anas",
          type: true,
        },
        {
          answer: "aziz",
          type: false,
        },
        {
          answer: "hamad",
          type: false,
        },
        {
          answer: "hussain",
          type: false,
        },
      ],
    },
    {
      words: "who is the best?",
      answers: [
        {
          answer: "moudhi",
          type: true,
        },
        {
          answer: "hey",
          type: false,
        },
        {
          answer: "you",
          type: false,
        },
        {
          answer: "welcome",
          type: false,
        },
      ],
    },
  ];
  correctAnswers = [];
  incorrectAnswers = [];
  resultQestions = [];
  timers = [];

  constructor() {
    makeAutoObservable(this);
  }

  addQuestion = (questoin) => {
    this.questions.push(questoin);
    localStorage.setItem("questions", this.questions);
    autorun(() => {
      localStorage.getItem("questions");
    });
  };

  addTimer = (time) => {
    this.timers.push(time);
    localStorage.setItem("timers", this.timers);
    autorun(() => {
      localStorage.getItem("timers");
    });
  };

  addCorrectAnswer = (answer) => {
    this.correctAnswers.push(answer);
    localStorage.setItem("correct", this.correctAnswers);
    autorun(() => {
      localStorage.getItem("correct");
    });
  };

  addInCorrectAnswer = (answer) => {
    this.incorrectAnswers.push(answer);
    localStorage.setItem("incorrect", this.incorrectAnswers);
    autorun(() => {
      localStorage.getItem("incorrect");
    });
  };

  addResultQuestions = (object) => {
    this.resultQestions.push(object);
    localStorage.setItem("resultQestions", this.resultQestions);
    autorun(() => {
      localStorage.getItem("resultQestions");
    });
  };

  checkForAnswer = () => {
    const questions = localStorage.getItem("questions");
    const correct = localStorage.getItem("correct");
    const incorrect = localStorage.getItem("incorrect");
    const resultQestions = localStorage.getItem("resultQestions");

    if (questions) {
      this.questions = questions;
    } else {
      this.questions = [];
    }

    if (correct) {
      this.correct = correct;
    } else {
      this.correct = [];
    }

    if (incorrect) {
      this.incorrect = incorrect;
    } else {
      this.incorrect = [];
    }

    if (resultQestions) {
      this.resultQestions = resultQestions;
    } else {
      this.resultQestions = [];
    }
  };
}

const answerStore = new AnswerStore();
export default answerStore;

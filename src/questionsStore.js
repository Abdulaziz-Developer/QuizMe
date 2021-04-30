import { observable, makeObservable } from "mobx";

class QuestionsStore {
  questions = [];
  constructor() {
    makeObservable(this, {
      questions: observable,
    });
  }
  // addQuestion = (data) => {
  //   this.questions.push(data);
  //   console.log(this.questions);
  // };
}

const questionsStore = new QuestionsStore();
export default questionsStore;

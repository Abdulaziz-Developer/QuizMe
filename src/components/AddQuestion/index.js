import { observer } from "mobx-react";
import React, { useState } from "react";
import { Redirect } from "react-router";
import answerStore from "../stores/answerStore";

// Styles
import { FormWrapper, AddButtonStyled, RequiredLabel, Form } from "./styles";

const AddQuestion = () => {
  const [question, setQuestion] = useState({
    words: "",
    answers: [],
  });

  const [answerObject, setAnswerObject] = useState({
    answer: "",
    type: true,
  });

  const handleAnswerChange = (event) => {
    setAnswerObject({
      ...answerObject,
      answer: [event.target.value],
    });
  };

  const handleChange = (event) => {
    setQuestion({
      ...question,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    question.answers.push(answerObject);
    console.log(question);

    if (question.answers.length === 4) {
      question.answers[3].type = false;
      question.answers[2].type = false;
      question.answers[1].type = false;
      answerStore.addQuestion(question);
    }
  };

  return (
    <div className="container">
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputPassword4">
                question<RequiredLabel>*</RequiredLabel>
              </label>
              <input
                value={question.words}
                onChange={handleChange}
                required
                type="text"
                name="words"
                className="form-control"
                placeholder="question"
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="inputPassword4">
                Right Answer<RequiredLabel>*</RequiredLabel>
              </label>
              <input
                onChange={handleAnswerChange}
                value={answerObject.answer}
                required
                type="text"
                name="answer"
                className="form-control"
              />
            </div>
          </div>
          <AddButtonStyled type="submit" className="btn btn-primary">
            Add
          </AddButtonStyled>
        </Form>
      </FormWrapper>
    </div>
  );
};

export default observer(AddQuestion);

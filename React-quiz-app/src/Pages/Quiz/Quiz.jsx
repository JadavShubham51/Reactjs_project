import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import "./Quiz.css";
import Questions from "../../Components/Questions/Questions";

const Quiz = ({ name, score, questions, setscore, setquestion }) => {
  const [options, setoptions] = useState();
  const [currQues, setcurrQues] = useState(0);

  useEffect(() => {
    console.log(questions); // quiz api call via prop in there

    setoptions(
      questions &&
        hanldeshuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
          
        ])
    );
  }, [questions,currQues]); //every time questions chnages there is dependsi use

  console.log(options);

  const hanldeshuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>Score : {score}</span>
          </div>

          <Questions
            currQues={currQues}
            setcurrQues={setcurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setscore={setscore}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;

import React, { useState } from "react";
import ErrorMessage from "../EroorMessage/ErrorMessage";
import "./Questions.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Questions = ({
  currQues,
  setcurrQues,
  questions,
  options,
  correct,
  score,
  setscore,
}) => {

  let result = useNavigate()

  const [selected, setselected] = useState();
  const [error, seterror] = useState(false);

  //select options in style in seleced in that
  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  //correct or not check
  const handleCheck = (i) => {
    setselected(i);
    if (i === correct) setscore(score + 1);
    seterror(false);
  };

  const handeNext=()=>{
    if(currQues>8){
      result("/result") // quit more than 8 result page
    }
    else if(selected){
      setcurrQues(currQues+1) // select and next qurestion use
      setselected()
    }
    else{
      seterror("please select an option first") // not select answer that wy
    }
  }

  const handeQuit=()=>{

  }

  return (
    <div className="question">
      <h1>Questions {currQues + 1}</h1>

      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                onClick={() => handleCheck(i)}
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={handeQuit}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handeNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;

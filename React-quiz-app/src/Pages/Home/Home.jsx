import { Button, MenuItem, TextField } from "@mui/material";
import "./Home.css";
import React, { useState } from "react";
import Categories from "../../Data/Categories";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../Components/EroorMessage/ErrorMessage";

const Home = ({ name, setName,fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, seterror] = useState(false);

  let quizpage = useNavigate();

  const handlesubmit =()=>{
    if(!category || !difficulty || !name){
        seterror(true)
        return;
    }
    else{
        seterror(false)
        fetchQuestions(category,difficulty)
        quizpage("/quiz")
    }
  }

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz settings</span>

        <div className="settings_select">
            {error && <ErrorMessage>Please Fill all the feilds </ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficuly"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handlesubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>

      <img src="quiz.svg" className="banner" alt="quiz img" />
    </div>
  );
};

export default Home;

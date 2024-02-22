import React, { useState, useEffect } from "react";
import { questions } from "./data/data";
import Question from "./components/Question";
import Result from "./components/Result";
import StartButton from "./components/StartButton";
import "./App.css";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [testStarted, setTestStarted] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);
  const [initialDelayPassed, setInitialDelayPassed] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    console.log("Current question index changed:", currentQuestionIndex);
    if (currentQuestionIndex !== null) {
      const timer = setTimeout(() => {
        if (!optionSelected) {
          transitionToNextQuestion();
        }
      }, 30000);

      const initialDelayTimer = setTimeout(() => {
        setInitialDelayPassed(true);
        setShowOptions(true);
      }, 10000);

      return () => {
        clearTimeout(timer);
        clearTimeout(initialDelayTimer);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionIndex, optionSelected]);

  const startTest = () => {
    console.log("Test Started");
    setCurrentQuestionIndex(0);
    setTestStarted(true);
    setUserAnswers([]);
  };

  const handleOptionSelect = (selectedOption) => {
    console.log("Option selected:", selectedOption);
    setSelectedOption(selectedOption);
    setShowOptions(false);
    setOptionSelected(true);
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers]; // Update the list if answered correctly
      if (currentQuestionIndex !== null) {
        newAnswers[currentQuestionIndex] = selectedOption || ""; // Add blank element to the list
      }
      return newAnswers;
    });
    checkAnswer(selectedOption);
  };

  const checkAnswer = (selectedOption) => {
    console.log("Checking answer...");
    const correctAnswer = currentQuestion.answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    transitionToNextQuestion();
  };

  const transitionToNextQuestion = () => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedOption]);

    if (currentQuestionIndex < questions.length - 1) {
      const nextQuestionIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOption(null);
      setShowOptions(false);
      setOptionSelected(false);
      setInitialDelayPassed(false);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1 className="header">Bilgi Yarışması</h1>
      </div>
      {!testStarted ? (
        <div className="start-container">
          <h2>Teste Başla!</h2>
          <p>
            Bu test, 10 sorudan oluşmaktadır. Her soru için 30 saniye süreniz
            olacak. Başarılar!
          </p>
          <button id="start" onClick={startTest}>
            Teste Başla
          </button>
        </div>
      ) : !showResult ? (
        <div className="question-container">
          <Question
            question={currentQuestion}
            selectedOption={selectedOption}
            showOptions={showOptions && initialDelayPassed}
            handleOptionSelect={handleOptionSelect}
          />
        </div>
      ) : (
        <div className="result-container">
          <Result
            correctAnswers={correctAnswers}
            incorrectAnswers={incorrectAnswers}
            questions={questions}
            userAnswers={userAnswers}
          />
        </div>
      )}
    </div>
  );
}

export default App;

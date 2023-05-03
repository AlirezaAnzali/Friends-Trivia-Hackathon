import React, { useEffect } from "react";
import Answers from "../Answers/Answers";
import "./Quiz.scss";



function Quiz(props) {
  const {
    showResult,
    handleFinishClick,
    handleAnswerClick,
    handleNextQuestionClick,
    currentQuestion,
    showCorrect,
    countAnswers,
    showNextQuestionButton,
    showFinishButton,
    questions,
    setCurrentQuestion,
    answersClickable,
    score,
    countQuestions
  } = props;
  const currentQuestionObj = questions[currentQuestion];


  useEffect(() => {
    setCurrentQuestion(Math.floor(Math.random() * questions.length));
  }, [questions, setCurrentQuestion]);


  return (
    <div className="quiz-container">
      {showResult && (
        <div className="question-container">
          <div class="question-number-container">
            <span class="question-number">{countQuestions}</span>
          </div>
          <h2>Who said that:</h2>
          <div class="blockquote-wrapper">
            <div class="blockquote">
              <h1>"{currentQuestionObj.quote}"</h1>
            </div>
          </div>
          <Answers
            handleAnswerClick={handleAnswerClick}
            answersClickable={answersClickable}
            showCorrect={showCorrect}
            questions={questions}
            currentQuestion={currentQuestion}
          />

          {showCorrect && (
            <div className="answer-status correct">
              Congrats! You got it right.
            </div>
          )}
          {!showCorrect && showNextQuestionButton && (
            <div className="answer-status incorrect">
              Sorry, wrong answer. The correct answer was{" "}
              <span className="bold">
                {questions[currentQuestion].character}
              </span>
              .
            </div>
          )}

          {countAnswers < 5 && showNextQuestionButton && (
            <button onClick={handleNextQuestionClick}>Next Question</button>
          )}
          {showFinishButton && (
            <button onClick={handleFinishClick}>Finish</button>
          )}
          <div className="stars-container">
            <span className={score >= 1 ? "star filled" : "star"}>&#9733;</span>
            <span className={score >= 2 ? "star filled" : "star"}>&#9733;</span>
            <span className={score >= 3 ? "star filled" : "star"}>&#9733;</span>
            <span className={score >= 4 ? "star filled" : "star"}>&#9733;</span>
            <span className={score === 5 ? "star filled" : "star"}>
              &#9733;
            </span>
          </div>
          {showResult && (
            <div className="score-container">
              <h2>Your score:</h2>
              <p>{score} out of 5</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;

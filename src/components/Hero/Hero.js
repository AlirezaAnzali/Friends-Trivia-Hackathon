import React from "react";
import "./Hero.scss";
import Poster from "../../assets/images/Poster.jpg";

function Hero({ setShowResult, score, showResult }) {
  return (
    <div className="hero">
      <div className="quiz-container">
        <h2>
          Think you're the biggest <span>FRIENDS</span> fan?
        </h2>
        <h3>Take this quiz to find out!</h3>
        {!showResult && (
          <button className="start-button" onClick={() => setShowResult(true)}>
            Start
          </button>
        )}
      </div>

      <img className="hero__image" src={Poster} alt="poster" />
    </div>
  );
}

export default Hero;

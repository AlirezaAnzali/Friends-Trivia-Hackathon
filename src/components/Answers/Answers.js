import React from "react";
import "./Answers.scss";

import JoeyImg from "../../assets/images/Joey.jpg";
import ChandlerImg from "../../assets/images/Chandler.jpg";
import MonicaImg from "../../assets/images/Monica.jpg";
import RachelImg from "../../assets/images/Rachel.jpg";
import PhoebeImg from "../../assets/images/Phoebe.jpg";
import RossImg from "../../assets/images/Ross.jpg";

function Answers({
  handleAnswerClick,
  answersClickable,
  showCorrect,
  questions,
  currentQuestion }) {
  const characters = [
    { name: "Joey", img: JoeyImg },
    { name: "Phoebe", img: PhoebeImg },
    { name: "Chandler", img: ChandlerImg },
    { name: "Monica", img: MonicaImg },
    { name: "Ross", img: RossImg },
    { name: "Rachel", img: RachelImg },
  ];

  return (
    <div className="answers">
      {characters.map((option) => (
        <div
          key={option.name}
          className="answer" 
          disabled={!answersClickable}
          onClick={() => handleAnswerClick(option.name)}
        >
          <img src={option.img} alt={option.name} />
          <span>{option.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Answers;

import image5 from "../../assets/images/5.jpg";
import image4 from "../../assets/images/4.jpg";
import image3 from "../../assets/images/3.jpg";
import image2 from "../../assets/images/2.jpg";
import image1 from "../../assets/images/1.jpg";
import image0 from "../../assets/images/0.jpg";

function Result({ score }) {
  const images = {
    0: image0,
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
  };
  const messages = {
    0: "Looks like you need to re-watch all 10 seasons of Friends. You scored 0 out of 5. Could you BE any more clueless?",
    1: "Well, at least you got one answer right. You scored 1 out of 5. Pivot and try again!",
    2: "Hey, not bad! You scored 2 out of 5. You're getting there, but you're not quite ready to join the gang at Central Perk yet.",
    3: "Good job, you're a regular Joey Tribbiani! You scored 3 out of 5. How you doin'?",
    4: "Impressive! You must have watched Friends more times than Chandler has made a sarcastic joke. You scored 4 out of 5. Could you BE any more of a Friends fan?",
    5: "Wow, you're a Friends expert! You scored 5 out of 5. You know the show better than Ross knows dinosaurs."
  };

  function handleClick() {
    window.location.reload();
  }

  return (
    <div className="modal">
      <img src={images[score]} alt={`Scored ${score} out of 5`} />
      <p>{messages[score]}</p>
      <button className="button" onClick={handleClick}>Try Again!</button>
    </div>
  );
}

export default Result;

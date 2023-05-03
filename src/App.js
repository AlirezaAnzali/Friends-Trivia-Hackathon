import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
import { useState, useEffect } from "react";
import axios from "axios";

const questions = [
  {
    id: "001",
    character: "Phoebe",
    quote: "Oh, I wish I could, but I don't want to.",
    episode: "The Pilot",
  },
  {
    id: "002",
    character: "Chandler",
    quote:
      "I mean, sure. I have my bad days but then I remember what a cute smile I have.",
    episode: "The One With the Ballroom Dancing",
  },
  {
    id: "003",
    character: "Chandler",
    quote:
      "I'm not great at the advice. Can I interest you in a sarcastic comment?",
    episode: "The One With the Tea Leaves",
  },
  {
    id: "004",
    character: "Ross",
    quote:
      "I tell you, when I actually die, some people are gonna get seriously haunted.",
    episode: "The One With the Memorial Service",
  },
  {
    id: "005",
    character: "Chandler",
    quote: "Let me think. Let me think. Oh, I don't care.''",
    episode: "The One With the Baby Shower",
  },
  {
    id: "006",
    character: "Chandler",
    quote:
      "When I first meet somebody, it's usually panic, anxiety, and a great deal of sweating.",
    episode: "The One With Joey's Award",
  },
  {
    id: "007",
    character: "Rachel",
    quote: "I'm so happy, and not at all jealous!",
    episode: "The One With the Proposal",
  },
  {
    id: "008",
    character: "Joey",
    quote:
      "It's a moo point. It's like a cow's opinion; it doesn't matter. It's moo.",
    episode: "The One Where Chandler Doesn't Like Dogs",
  },
  {
    id: "009",
    character: "Chandler",
    quote: "I tend to keep talking until somebody stops me.",
    episode: "The One Where Rachel Goes Back to Work",
  },
  {
    id: "010",
    character: "Phoebe",
    quote: "It's so exhausting, waiting for death.",
    episode: "The One Where Joey Loses his Insurance",
  },
  {
    id: "011",
    character: "Phoebe",
    quote: "Everybody looks so happy. I hate that.",
    episode: "The One With the Monkey",
  },
  {
    id: "012",
    character: "Monica",
    quote: "I hope it's still funny when you're in hell.",
    episode: "The One With the Giant Poking Device",
  },
  {
    id: "013",
    character: "Phoebe",
    quote: "I'm very wise, I know.",
    episode: "The One With All the Cheesecakes",
  },
  {
    id: "014",
    character: "Ross",
    quote: "You're my lobster.",
    episode: "The One With the Prom Video",
  },
  {
    id: "015",
    character: "Ross",
    quote: "You're over me? When were you…under me?",
    episode: "The One Where Ross Finds Out",
  },
  {
    id: "016",
    character: "Ross",
    quote: "We were on a break!",
    episode: "The One Where Ross and Rachel Take a Break",
  },
  {
    id: "017",
    character: "Chandler",
    quote:
      "Until I was 25, I thought the response to 'I love you' was 'Oh, crap.",
    episode: "The One With the Tea Leaves",
  },
  {
    id: "018",
    character: "Monica",
    quote:
      "It's never taken you more than a shower to get over a relationship.",
    episode: "The One Without the Ski Trip",
  },
  {
    id: "019",
    character: "Phoebe",
    quote:
      "No, I'm a positive person. You're like Santa Claus on Prozac in Disneyland getting laid.",
    episode: "The One in Massapequa",
  },
  {
    id: "020",
    character: "Joey",
    quote: "You hung up on the pizza place? I don't hang up on your friends.",
    episode: "The One With the Creepy Christmas Card",
  },
  {
    id: "021",
    character: "Monica",
    quote:
      "I needed a plan, a plan to get over my man. And what's opposite of man? Jam.",
    episode: "The One With the Jam",
  },
  {
    id: "022",
    character: "Chandler",
    quote: "I'm full, and yet I know if I stop eating this, I'll regret it.",
    episode: "The One With all the Cheesecakes",
  },
  {
    id: "023",
    character: "Joey",
    quote: "Well, the fridge broke, so I had to eat everything.",
    episode: "The One With Joey's Fridge",
  },
  {
    id: "024",
    character: "Joey",
    quote: "Here come the meat sweats.",
    episode: "The One With the Rumor",
  },
  {
    id: "025",
    character: "Rachel",
    quote: "We are dessert stealers. We are living outside the law.",
    episode: "The One With All the Cheesecakes",
  },
  {
    id: "026",
    character: "Rachel",
    quote: "Oh, that's okay. Girls tend not to like me.",
    episode: "The One Where Ross is Fine",
  },
  {
    id: "027",
    character: "Monica",
    quote:
      "I can't believe my dad saw us having sex! He didn't make it to one of my piano recitals, but this he sees!",
    episode: "The One Where No One Proposes",
  },
  {
    id: "028",
    character: "Joey",
    quote: "Look at me! I'm Chandler! Could I BE wearing any more clothes?",
    episode: "The One Where No-One's Ready",
  },
  {
    id: "029",
    character: "Phoebe",
    quote: "I want world peace. Oh, and bigger boobs!",
    episode: "The One With George Stephanopoulos",
  },
  {
    id: "030",
    character: "Phoebe",
    quote: "God, I love how sexy I am",
    episode: "The One With Joey's New Girlfriend",
  },
];

function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [countAnswers, setCountAnswers] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showNextQuestionButton, setShowNextQuestionButton] = useState(false);
  const [showFinishButton, setShowFinishButton] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answersClickable, setAnswersClickable] = useState(true);
  const [quizFinished, setQuizFinished] = useState(false);
  const [askedQuestions, setAskedQuestions] = useState([]);
  // const [questions, setQuestions] = useState([]);
  const [countQuestions, setCountQuestions] = useState(1);

  // useEffect (()=>{
  //   axios
  //   .get("add your path here")
  //   .then ((response)=> {
  //     setQuestions(response.data)
  //   })
  //   .catch ((err)=> {
  //     throw(err)
  //   })
  // },[]);


  const handleAnswerClick = (answer) => {
    if (!answersClickable) {
      return;
    }
    if (answer === questions[currentQuestion].character && score < 5) {
      setShowCorrect(true);
      setScore(score + 1);
    } else {
      setShowCorrect(false);
    }
    setCountAnswers(countAnswers + 1);
    if (countAnswers === 4) {
      setShowFinishButton(true);
    } else {
      setShowNextQuestionButton(true);
    }
    setAnswersClickable(false);
  };

  const handleNextQuestionClick = () => {
    setCountQuestions(countQuestions+1);
    setShowNextQuestionButton(false);
    setShowCorrect(false);
    if (countAnswers === 5) {
      setShowFinishButton(true);
      return;
    }
    let nextQuestion = Math.floor(Math.random() * questions.length);
    while (
      nextQuestion === currentQuestion ||
      askedQuestions.includes(nextQuestion)
    ) {
      nextQuestion = Math.floor(Math.random() * questions.length);
    }
    setCurrentQuestion(nextQuestion);
    setAnswersClickable(true);
    setAskedQuestions([...askedQuestions, currentQuestion]);
  };

  const handleFinishClick = () => {
    setQuizFinished(true);
  };

  return (
    <div className="app">
      {quizFinished ? <Result score={score} /> : null}
      <div className={quizFinished ? "hidden" : ""}>
        <Header />
        <div className={showResult ? "hidden" : ""}>
          <Hero
            setShowResult={setShowResult}
            score={score}
            showResult={showResult}
          />
        </div>
        <Quiz
          showResult={showResult}
          setShowResult={setShowResult}
          score={score}
          setScore={setScore}
          handleFinishClick={handleFinishClick}
          handleAnswerClick={handleAnswerClick}
          handleNextQuestionClick={handleNextQuestionClick}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          setShowCorrect={setShowCorrect}
          showCorrect={showCorrect}
          countAnswers={countAnswers}
          setCountAnswers={setCountAnswers}
          setShowNextQuestionButton={setShowNextQuestionButton}
          showNextQuestionButton={showNextQuestionButton}
          setShowFinishButton={setShowFinishButton}
          showFinishButton={showFinishButton}
          questions={questions}
          answersClickable={answersClickable}
          countQuestions={countQuestions}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;

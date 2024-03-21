import { useContext } from "react";
import data from "../data.json";
import NavBar from "./NavBar";
import ThemeContext from "../context/ThemeContext";

function QuizFrontPage({ selectedQuiz, setSelectedQuiz }) {
  function handleSelectedQuiz(quiz) {
    setSelectedQuiz(quiz);
  }
  return (
    <>
      <NavBar selectedQuiz={selectedQuiz} />
      <div className="quiz__body">
        <WelcomeText />
        <QuizTitle onSelect={handleSelectedQuiz} />
      </div>
    </>
  );
}

function WelcomeText() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="welcome-text">
      <h2 className="welcome-text__box">
        <span>Welcome to the </span>
        <span>Frontend Quiz! </span>
      </h2>

      <p className={`welcome-text__text ${theme}`}>
        Pick a subject to get started.
      </p>
    </div>
  );
}

function QuizTitle({ onSelect }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="quiz-title">
      {data.quizzes.map((data) => (
        <div
          key={data.title}
          role="button"
          onClick={() => onSelect(data)}
          className={`quiz-title__box ${theme}`}
        >
          <div
            className="quiz-title__box--img"
            style={{ background: `${data.color}` }}
          >
            <img src={data.icon} alt={data.title} />
          </div>
          <p className="quiz-title__box--text">{data.title}</p>
        </div>
      ))}
    </div>
  );
}

export default QuizFrontPage;

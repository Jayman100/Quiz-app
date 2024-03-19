import data from "../data.json";

function QuizFrontPage({ setSelectedQuiz }) {
  function handleSelectedQuiz(quiz) {
    setSelectedQuiz(quiz);
  }
  return (
    <div className="quiz__body">
      <WelcomeText />
      <QuizTitle onSelect={handleSelectedQuiz} />
    </div>
  );
}

function WelcomeText() {
  return (
    <div className="welcome-text">
      <h2>
        <span>Welcome to the </span>
        <span>Frontend Quiz! </span>
      </h2>

      <p>Pick a subject to get started</p>
    </div>
  );
}

function QuizTitle({ onSelect }) {
  return (
    <div className="quiz-title">
      {data.quizzes.map((data) => (
        <div
          key={data.title}
          role="button"
          onClick={() => onSelect(data)}
          className="quiz-tite__box"
        >
          <div
            className="quiz-title__box--img"
            style={{ background: `${data.color}` }}
          >
            <img src={data.icon} alt={data.title} />
          </div>
          <p>{data.title}</p>
        </div>
      ))}
    </div>
  );
}

export default QuizFrontPage;

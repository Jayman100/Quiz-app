import ToggleButton from "./ToggleButton";
import data from "../data.json";

function NavBar({ selectedQuiz }) {
  console.log(selectedQuiz);
  return (
    <nav className="quiz__header">
      {selectedQuiz.title && <QuizTitle selectedQuiz={selectedQuiz} />}
      <ToggleButton />
    </nav>
  );
}

function QuizTitle({ selectedQuiz }) {
  return (
    <div className="selected-quiz">
      <div
        className="selected-quiz__img"
        style={{ background: `${selectedQuiz.color}` }}
      >
        {<img src={selectedQuiz.icon} alt={selectedQuiz.title} />}
      </div>
      <p>{selectedQuiz.title}</p>
    </div>
  );
}

export default NavBar;

import ToggleButton from "./ToggleButton";
import data from "../data.json";

function NavBar({ selectedQuiz }) {
  console.log(selectedQuiz);
  return (
    <nav className="quiz__header">
      {selectedQuiz && <QuizTitle selectedQuiz={selectedQuiz} />}
      <ToggleButton />
    </nav>
  );
}

function QuizTitle({ selectedQuiz }) {
  return (
    <div>
      <img src={selectedQuiz.icon} alt={selectedQuiz.title} />
      <p>{selectedQuiz.title}</p>
    </div>
  );
}

export default NavBar;

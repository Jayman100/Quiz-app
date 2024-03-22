import Title from "../utils/Title.jsx";
import ToggleButton from "./ToggleButton";

function NavBar({ selectedQuiz }) {
  return (
    <nav className="quiz__header">
      {selectedQuiz.title && <Title selectedQuiz={selectedQuiz} />}
      <ToggleButton />
    </nav>
  );
}

export default NavBar;

import Title from "../utils/Title.jsx";
import ToggleButton from "./ToggleButton";

function NavBar({ selectedQuiz }) {
  console.log(selectedQuiz);
  return (
    <nav className="quiz__header">
      {selectedQuiz.title && <Title selectedQuiz={selectedQuiz} />}
      <ToggleButton />
    </nav>
  );
}

export default NavBar;

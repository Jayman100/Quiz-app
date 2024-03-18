import NavBar from "./components/NavBar";
import QuizFrontPage from "./components/QuizFrontPage";
import { useState } from "react";

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState();

  return (
    <div className="quiz">
      <NavBar selectedQuiz={selectedQuiz} />
      <QuizFrontPage setSelectedQuiz={setSelectedQuiz} />
    </div>
  );
}

export default App;

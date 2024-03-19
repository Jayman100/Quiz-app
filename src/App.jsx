import NavBar from "./components/NavBar";
import Quiz from "./components/Quiz";
import QuizFrontPage from "./components/QuizFrontPage";
import { useState } from "react";

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState({});

  return (
    <div className="quiz">
      <NavBar selectedQuiz={selectedQuiz} />
      {!selectedQuiz.title ? (
        <QuizFrontPage setSelectedQuiz={setSelectedQuiz} />
      ) : (
        <Quiz selectedQuiz={selectedQuiz} />
      )}
    </div>
  );
}

export default App;

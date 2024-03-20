import NavBar from "./components/NavBar";
import Quiz from "./components/Quiz";
import QuizFrontPage from "./components/QuizFrontPage";
import { useEffect, useState } from "react";

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState({});

  return (
    <section className="panel dark">
      <div className="quiz">
        {!selectedQuiz.title && (
          <QuizFrontPage
            selectedQuiz={selectedQuiz}
            setSelectedQuiz={setSelectedQuiz}
          />
        )}
        {selectedQuiz.title && (
          <Quiz selectedQuiz={selectedQuiz} setSelectedQuiz={setSelectedQuiz} />
        )}
      </div>
    </section>
  );
}

export default App;

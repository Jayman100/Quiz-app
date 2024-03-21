import NavBar from "./components/NavBar";
import Quiz from "./components/Quiz";
import QuizFrontPage from "./components/QuizFrontPage";
import { useEffect, useState } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState({});
  const [theme, setTheme] = useState(() => {
    const storedTheme = JSON.parse(localStorage.getItem("theme"));

    return storedTheme ? storedTheme[0] : "";
  });

  // const storedTheme = JSON.parse(localStorage.getItem("theme"));

  // console.log(storedTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <section className={`panel ${theme}`}>
        <div className="quiz">
          {!selectedQuiz.title && (
            <QuizFrontPage
              selectedQuiz={selectedQuiz}
              setSelectedQuiz={setSelectedQuiz}
            />
          )}
          {selectedQuiz.title && (
            <Quiz
              selectedQuiz={selectedQuiz}
              setSelectedQuiz={setSelectedQuiz}
            />
          )}
        </div>
      </section>
    </ThemeContext.Provider>
  );
}

export default App;

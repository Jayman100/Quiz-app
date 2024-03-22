import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function QuestionBox({ selectedQuiz, questionNum }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="question__box">
      <div className="question__text">
        <p className={`question__text--num ${theme}`}>{`Question ${
          questionNum + 1
        } of ${selectedQuiz.questions.length}`}</p>
        <h1 className="question__text--head">
          {selectedQuiz.questions[questionNum].question}
        </h1>
      </div>
      <div className={`question-bar ${theme}`}>
        <div style={{ width: `${(questionNum + 1) * 10}%` }}>&nbsp;</div>
      </div>
    </div>
  );
}

export default QuestionBox;

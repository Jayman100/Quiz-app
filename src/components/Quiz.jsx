import data from "../data.json";
import { useState } from "react";

function Quiz({ selectedQuiz }) {
  const [questionNum, setQuestionNum] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);
  const [right, setRight] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const answer = selectedQuiz.questions.map((option) => option.answer);

  function handleSubmit() {
    setOptions((options) => [...options, selectedOption]);

    if (answer.includes(selectedOption)) setRight(true);
    if (!answer.includes(selectedOption)) setWrong(true);
    setIsSubmitted(true);
    setDisabled(true);
  }

  function handleNext() {
    setQuestionNum((questionNum) => questionNum + 1);
    setIsSubmitted(false);
    setDisabled(false);
    setRight(false);
    setWrong(false);
  }

  return (
    <div className="question">
      <QuestionBox selectedQuiz={selectedQuiz} questionNum={questionNum} />
      <QuestionOptions
        selectedQuiz={selectedQuiz}
        questionNum={questionNum}
        onSubmit={handleSubmit}
        onNext={handleNext}
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
        right={right}
        wrong={wrong}
        isSubmitted={isSubmitted}
        disabled={disabled}
      />
    </div>
  );
}

function QuestionBox({ selectedQuiz, questionNum }) {
  return (
    <div className="question__box">
      <div className="question__text">
        <p>{`Question ${questionNum + 1} of ${
          selectedQuiz.questions.length
        }`}</p>
        <h1>{selectedQuiz.questions[questionNum].question}</h1>
      </div>
      <div className="question-bar">
        <div style={{ width: `${(questionNum + 1) * 10}%` }}>&nbsp;</div>
      </div>
    </div>
  );
}

function QuestionOptions({
  selectedQuiz,
  questionNum,
  onSubmit,
  selectedOption,
  setSelectedOption,
  right,
  wrong,
  isSubmitted,
  onNext,
  disabled,
}) {
  const optionsLetters = ["A", "B", "C", "D"];
  return (
    <div className="question__options">
      {selectedQuiz.questions[questionNum].options.map((option, i) => (
        <Options
          key={option}
          option={option}
          letter={optionsLetters[i]}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          answer={selectedQuiz.questions[questionNum].answer}
          right={right}
          disabled={disabled}
          wrong={wrong}
        />
      ))}

      {!isSubmitted ? (
        <Button type="submit" onSubmit={onSubmit}>
          Submit answer
        </Button>
      ) : (
        <Button type="submit" onSubmit={onNext}>
          Next Question
        </Button>
      )}
    </div>
  );
}

function Button({ children, onSubmit }) {
  return (
    <button type="submit" onClick={onSubmit} className="btn-submit">
      {children}
    </button>
  );
}

function Options({
  option,
  letter,
  selectedOption,
  setSelectedOption,
  answer,
  right,
  disabled,
  wrong,
}) {
  const [hover, setHover] = useState(false);

  return (
    <label
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      htmlFor={option}
      className={`option__label ${selectedOption === option && "checked"}`}
    >
      <input
        type="checkbox"
        id={option}
        checked={selectedOption === option}
        onChange={() => setSelectedOption(option)}
        disabled={disabled}
      />
      <p
        className="option__letter"
        style={{ color: hover && "#a729f5", background: hover && "#f6e7ff" }}
      >
        {letter}
      </p>
      <p className="option">{option}</p>

      <div>
        <p>{right && selectedOption === option ? "correct" : null}</p>
        <p>{wrong && selectedOption === option ? "wrong" : null}</p>
        <p>{wrong && answer === option ? "correct" : null}</p>
      </div>
    </label>
  );
}
export default Quiz;

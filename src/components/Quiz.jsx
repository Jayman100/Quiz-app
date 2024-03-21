import { useContext, useEffect, useState } from "react";
import Button from "../utils/Button";
import Score from "./Score";
import NavBar from "./NavBar";
import ThemeContext from "../context/ThemeContext";

function Quiz({ selectedQuiz, setSelectedQuiz }) {
  const [questionNum, setQuestionNum] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);
  const [correctOptions, setCorrectOptions] = useState([]);
  const [wrongOptions, setWrongOptions] = useState([]);
  const [right, setRight] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [ispicked, setIsPicked] = useState(false);

  const answer = selectedQuiz.questions.map((option) => option.answer);

  useEffect(() => {
    if (selectedOption) {
      setIsPicked(false);
    }
  }, [selectedOption]);

  function handleSubmit() {
    if (selectedOption === "") {
      setIsPicked(true);
      return;
    }
    setOptions((options) => [...options, selectedOption]);

    if (answer.includes(selectedOption))
      setCorrectOptions((correctOptions) => [
        ...correctOptions,
        selectedOption,
      ]);

    if (!answer.includes(selectedOption))
      setWrongOptions((wrongOptions) => [...wrongOptions, selectedOption]);

    if (answer.includes(selectedOption) && selectedOption) setRight(true);
    if (!answer.includes(selectedOption) && selectedOption) setWrong(true);
    if (selectedOption) setIsSubmitted(true);
    if (selectedOption) setDisabled(true);
  }

  function handleNext() {
    if (questionNum < 9) setQuestionNum((questionNum) => questionNum + 1);
    setIsSubmitted(false);
    setDisabled(false);
    setRight(false);
    setWrong(false);
    setSelectedOption("");
    setIsPicked(false);
  }

  return (
    <>
      <NavBar selectedQuiz={selectedQuiz} />
      <div className="question">
        {options.length === 10 && (
          <Score
            correct={correctOptions}
            wrong={wrongOptions}
            options={options}
            selectedQuiz={selectedQuiz}
            setSelectedQuiz={setSelectedQuiz}
          />
        )}
        {!(options.length === 10) && (
          <>
            <QuestionBox
              selectedQuiz={selectedQuiz}
              questionNum={questionNum}
            />
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
              ispicked={ispicked}
            />
          </>
        )}
      </div>
    </>
  );
}

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
  ispicked,
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

      {!isSubmitted && (
        <Button type="submit" onSubmit={onSubmit} disabled={!selectedOption}>
          Submit answer
        </Button>
      )}
      {isSubmitted && (
        <Button type="submit" onSubmit={onNext}>
          Next Question
        </Button>
      )}

      <div className="error">
        {ispicked && (
          <>
            <ValidationImage src="../public/assets/images/icon-incorrect.svg" />
            <span>Please select an answer</span>
          </>
        )}
      </div>
    </div>
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
  const { theme } = useContext(ThemeContext);

  let className;
  if (right && selectedOption === option) className = "correct__option";
  if (wrong && selectedOption === option) className = "incorrect__option";

  let letterClassName;

  if (hover) letterClassName = "hover";
  if (right && selectedOption === option) letterClassName = "correct__letter";
  if (wrong && selectedOption === option) letterClassName = "incorrect__letter";
  if (selectedOption === option && !right && !wrong)
    letterClassName = "checked__letter";

  return (
    <label
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      htmlFor={option}
      className={`option__label ${
        selectedOption === option && "checked"
      } ${className} ${theme}`}
    >
      <div className="option__box">
        <input
          type="checkbox"
          id={option}
          checked={selectedOption === option}
          onChange={() => setSelectedOption(option)}
          disabled={disabled}
        />
        <p className={`option__letter ${letterClassName} ${theme}`}>{letter}</p>
        <p className="option">{option}</p>
      </div>

      <div>
        <p>
          {right && selectedOption === option && (
            <ValidationImage src="../public/assets/images/icon-correct.svg" />
          )}
        </p>
        <p>
          {wrong && selectedOption === option && (
            <ValidationImage src="../public/assets/images/icon-incorrect.svg" />
          )}
        </p>
        <p>
          {wrong && answer === option && (
            <ValidationImage src="../public/assets/images/icon-correct.svg" />
          )}
        </p>
      </div>
    </label>
  );
}

function ValidationImage({ src }) {
  return <img style={{ height: "24px" }} src={src} alt="validation icon" />;
}
export default Quiz;

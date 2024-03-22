import Button from "../utils/Button";
import ValidationIcon from "../utils/ValidationIcon";
import Options from "./Options";
import wrongIcon from "../../public/assets/images/icon-incorrect.svg";

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
            <ValidationIcon src={wrongIcon} />
            <span>Please select an answer</span>
          </>
        )}
      </div>
    </div>
  );
}
export default QuestionOptions;

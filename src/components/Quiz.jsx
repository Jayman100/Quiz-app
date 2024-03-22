import { useEffect, useState } from "react";

import Score from "./Score";
import NavBar from "./NavBar";
import QuestionBox from "./QuestionBox";
import QuestionOptions from "./QuestionOptions";

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

export default Quiz;

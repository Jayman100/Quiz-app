import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import ValidationIcon from "../utils/ValidationIcon";
import wrongIcon from "../../public/assets/images/icon-incorrect.svg";
import correctIcon from "../../public/assets/images/icon-correct.svg";
import { useState } from "react";

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
            <ValidationIcon src={correctIcon} />
          )}
        </p>
        <p>
          {wrong && selectedOption === option && (
            <ValidationIcon src={wrongIcon} />
          )}
        </p>
        <p>
          {wrong && answer === option && <ValidationIcon src={correctIcon} />}
        </p>
      </div>
    </label>
  );
}

export default Options;

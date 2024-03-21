import { useContext, useState } from "react";
import Button from "../utils/Button";
import Title from "../utils/Title";
import App from "../App";
import ThemeContext from "../context/ThemeContext";

function Score({ wrong, correct, options, selectedQuiz, setSelectedQuiz }) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handlePlay() {
    setIsCompleted(true);
    setSelectedQuiz({});
  }

  return (
    <>
      {isCompleted && <App />}

      {!isCompleted && (
        <>
          <ScoreText />
          <ScoreStat
            selectedQuiz={selectedQuiz}
            correct={correct}
            options={options}
            onPlay={handlePlay}
          />
        </>
      )}
    </>
  );
}

function ScoreText() {
  return (
    <div className="score__text">
      <h2>Quiz completed</h2>
      <h2>You scored...</h2>
    </div>
  );
}

function ScoreStat({ selectedQuiz, correct, options, onPlay }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="score__stat">
      <div className={`score__stat--box ${theme}`}>
        <div>
          <Title selectedQuiz={selectedQuiz} />
        </div>

        <div className="score__num">
          <h2 className="correct__text">{correct.length}</h2>
          <p
            className={`option__text ${theme}`}
          >{`out of ${options.length}`}</p>
        </div>
      </div>

      <Button onSubmit={onPlay}>Play Again</Button>
    </div>
  );
}

export default Score;

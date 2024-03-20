import { useState } from "react";
import Button from "../utils/Button";
import Title from "../utils/Title";
import App from "../App";

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
  return (
    <div className="score__stat">
      <div className="score__stat--box">
        <div>
          <Title selectedQuiz={selectedQuiz} />
        </div>

        <div>
          <h2>{correct.length}</h2>
          <p>{`out of ${options.length}`}</p>
        </div>
      </div>

      <Button onSubmit={onPlay}>Play Again</Button>
    </div>
  );
}

export default Score;

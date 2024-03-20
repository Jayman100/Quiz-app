function Title({ selectedQuiz }) {
  return (
    <div className="selected-quiz">
      <div
        className="selected-quiz__img"
        style={{ background: `${selectedQuiz.color}` }}
      >
        {<img src={selectedQuiz.icon} alt={selectedQuiz.title} />}
      </div>
      <p>{selectedQuiz.title}</p>
    </div>
  );
}

export default Title;

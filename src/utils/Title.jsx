function Title({ selectedQuiz }) {
  return (
    <div className="selected-quiz">
      <div
        className="selected-quiz__img"
        style={{ background: `${selectedQuiz.color}` }}
      >
        {<img src={selectedQuiz.icon} alt={selectedQuiz.title} />}
      </div>
      <p className="selected-quiz__title">{selectedQuiz.title}</p>
    </div>
  );
}

export default Title;

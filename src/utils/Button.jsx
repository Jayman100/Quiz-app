function Button({ children, onSubmit }) {
  return (
    <button type="submit" onClick={onSubmit} className="btn-submit">
      {children}
    </button>
  );
}

export default Button;

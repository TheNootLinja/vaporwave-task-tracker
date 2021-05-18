import '../styles/Button.css';

function Button({ className, bText, handleClick, type }) {
  return (
    <button onClick={handleClick} className={className} type={type}>
      {bText}
    </button>
  );
}

export default Button;

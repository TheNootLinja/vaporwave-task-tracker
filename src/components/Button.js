import '../styles/Button.css';

function Button({className, bText, handleClick}) {
    return (
        <button onClick={handleClick} className={className}>{bText}</button>
    )
}

export default Button;
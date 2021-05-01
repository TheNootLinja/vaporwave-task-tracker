import '../styles/Button.css';

function Button({className, bText, handleClick}) {
    return (
        <button className={className}>{bText}</button>
    )
}

export default Button;
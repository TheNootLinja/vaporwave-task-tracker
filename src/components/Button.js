import '../styles/Button.css';

function Button({className, bText}) {
    return (
        <button className={className}>{bText}</button>
    )
}

export default Button;
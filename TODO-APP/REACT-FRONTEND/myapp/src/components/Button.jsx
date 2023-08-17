import PropTypes  from "react"

const Button = ({color, text, onClick}) => {
    return (
        <div>
            <button onClick={onClick} className="btn" style={{backgroundColor: color}}>{text}</button>
        </div>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
}
export default Button
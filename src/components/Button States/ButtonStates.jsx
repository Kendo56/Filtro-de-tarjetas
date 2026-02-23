import './ButtonStates.css'

const ButtonStates = ({ className, stylebutton, textButton, ...rest }) => {
    return (
        <button className={`container_buttonStates ${className || ''}`} {...rest}>
            {textButton}
        </button>
    )
}

export default ButtonStates


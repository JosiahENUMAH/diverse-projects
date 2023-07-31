import "./Button.css"

const Button = ({clickFunc, label="Click Me"}) => {
    return (<button onClick={clickFunc} className="Button"> {label} </button>
    )
};

export default Button;
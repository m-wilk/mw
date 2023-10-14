import "./button.scss";

function Button(props) {
  return (
    <button type="button"  className={`btn ${props.extraClass}`}>
      {props.children}
    </button>
  );
}

export default Button;

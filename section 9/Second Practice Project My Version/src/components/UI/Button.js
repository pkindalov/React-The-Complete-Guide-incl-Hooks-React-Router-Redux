import classes from "./Button.module.css";

const Button = ({ type, label, onBtnClickHandler }) => {
  const btnClickHandler = () => {
    if (onBtnClickHandler) onBtnClickHandler();
  };
  return (
    <button type={type} className={classes.button} onClick={btnClickHandler}>
      {label}
    </button>
  );
};

export default Button;

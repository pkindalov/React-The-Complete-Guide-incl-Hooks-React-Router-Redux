import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";
import cardClasses from "./Card.module.css";

const ErrorModal = ({ msg, removeModal }) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <Card cssClsNames={[cardClasses["card-user__width"]]}>
          <div className={classes.header}>
            <h2 className={classes.header}>Invalid Input</h2>
          </div>
          <div className={classes.content}>
            <p>{msg}</p>
          </div>
          <div className={classes.actions}>
            <Button
              type={"button"}
              label={"Okay"}
              onBtnClickHandler={removeModal}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;

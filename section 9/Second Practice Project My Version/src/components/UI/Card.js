import classes from "./Card.module.css";

const Card = ({ cssClsNames, children }) => {
  let classNames = classes.card;
  if(cssClsNames) classNames = [...cssClsNames, classes.card].join(" ");

  return <div className={classNames}>{children}</div>;
};

export default Card;

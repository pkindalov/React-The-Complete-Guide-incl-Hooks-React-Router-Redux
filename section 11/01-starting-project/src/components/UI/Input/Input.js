import classes from "./Input.module.css";

//Lecturer version
const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

//My Version
// const Input = (props) => {
//   return (
//     <div
//       className={`${props.className} ${props.invalidCls}`}
//     >
//       <label htmlFor={props.htmlFor}>{props.labelText}</label>
//       <input
//         type={props.type}
//         id={props.id}
//         value={props.value}
//         onChange={props.onChangeHandler}
//         onBlur={props.onBlurHandler}
//       />
//     </div>
//   );
// };

export default Input;

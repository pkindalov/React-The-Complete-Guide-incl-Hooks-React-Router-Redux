import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = () => {

  const submitFormHandle = (e) => {
    e.preventDefault();
    alert('Form Submitted');
  }

  return (
    <form onSubmit={submitFormHandle}>
      <div>
        <label className={classes.input} htmlFor="username">
          Username
        </label>
        <input
          className={classes.input}
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div>
      <label className={classes.input} htmlFor="age">
          Age(Years)
        </label>
        <input
          className={classes.input}
          type="number"
          name="age"
          id="age"
        />
      </div>
      <div>
        <Button type={"submit"} label={"Add User"} />
      </div>
    </form>
  );
};

export default AddUser;

import classes from "./AddUser.module.css";

const AddUser = () => {
  return (
    <form>
      <div>
        <label className={classes.input} for="username">
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
      <label className={classes.input} for="age">
          Age(Years)
        </label>
        <input
          className={classes.input}
          type="number"
          name="age"
          id="age"
        />
      </div>
    </form>
  );
};

export default AddUser;

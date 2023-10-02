import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = ({ onAddUser }) => {
  const [userData, setUserData] = useState({
    username: "",
    age: "",
  });

  const inputChangeHandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setUserData((prevState) => {
      return { ...prevState, [field]: value };
    });
  };

  const submitFormHandle = (e) => {
    e.preventDefault();
    const user = { username: userData.username, age: userData.age };
    onAddUser(user);
  };

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
          onChange={inputChangeHandler}
          value={userData.username}
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
          onChange={inputChangeHandler}
          value={userData.age}
        />
      </div>
      <div>
        <Button type={"submit"} label={"Add User"} />
      </div>
    </form>
  );
};

export default AddUser;

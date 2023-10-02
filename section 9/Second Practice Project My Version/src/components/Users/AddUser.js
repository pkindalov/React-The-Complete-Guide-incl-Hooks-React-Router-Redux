import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddUser }) => {
  const [userData, setUserData] = useState({
    username: "",
    age: "",
  });

  const [isErrorActive, setIsErrorActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Invalid input");

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
    if (!user.username || user.username.trim().length === 0) {
      console.log("Username cannot be empty");
      setIsErrorActive(true);
      setErrorMsg("Username cannot be empty");
      return;
    }

    if (user.username.trim().length < 3) {
      console.log("Username must be at least 3 characters long.");
      setIsErrorActive(true);
      setErrorMsg("Username must be at least 3 characters long.");
      return;
    }

    if (!user.age) {
      console.log("Age is invalid");
      setIsErrorActive(true);
      setErrorMsg("Age is invalid");
      return;
    }
    console.log("User added");
    onAddUser(user);
  };

  return (
    <div>
      {isErrorActive && <ErrorModal msg={errorMsg} />}
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
    </div>
  );
};

export default AddUser;

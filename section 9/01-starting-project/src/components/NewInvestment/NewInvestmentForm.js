import { useState } from "react";
import styles from "./NewInvestmentForm.module.css";

const NewInvestmentForm = ({ onSubmit }) => {
  const [userInput, setUserInput] = useState({
    currentSavings: 0,
    yearlyContribution: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setUserInput((prevState) => {
      return { ...prevState, [name]: +value };
    });
  };

  const resetFormHandler = () => {
    setUserInput({
      currentSavings: 0,
      yearlyContribution: 0,
      expectedReturn: 0,
      duration: 0,
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    onSubmit(userInput);
  };

  // console.log(userInput);

  return (
    <form onSubmit={submitFormHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            name="currentSavings"
            id="current-savings"
            value={userInput["currentSavings"]}
            onChange={inputChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            name="yearlyContribution"
            id="yearly-contribution"
            value={userInput["yearlyContribution"]}
            onChange={inputChangeHandler}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            name="expectedReturn"
            id="expected-return"
            value={userInput["expectedReturn"]}
            onChange={inputChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            name="duration"
            id="duration"
            value={userInput["duration"]}
            onChange={inputChangeHandler}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          onClick={resetFormHandler}
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default NewInvestmentForm;

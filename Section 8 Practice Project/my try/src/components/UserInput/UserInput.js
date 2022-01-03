import React, { useState } from 'react';
import styles from './UserInput.module.css';
import Button from '../UI/Button/Button';

const UserInput = (props) => {
	let [ username, setUsername ] = useState('');
	let [ age, setAge ] = useState('');
	let [ isValid, setIsValid ] = useState(true);
	let [ isOkClicked, setIsOkClicked ] = useState(true);

	const userInputChangeHandler = (event) => {
		setUsername(event.target.value);
	};

	const userYearsInputChangeHandler = (event) => {
		const age = parseInt(event.target.value);
		setAge(age);
	};

	const clickOkBtn = (event) => {
		event.preventDefault();
		setIsOkClicked(true);
        props.isUserInputValid(true);
	};

	const isUsernameValid = (username) => {
		return username && username.trim().length > 0;
	};

	const isAgeValid = (age) => {
		return typeof age === 'number' && age > 0 && age < 130;
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (isUsernameValid(username) && isAgeValid(age)) {
			setIsValid((prevState) => true);
			return;
		}
		setIsValid((prevState) => false);
		setIsOkClicked((prevState) => false);
        props.isUserInputValid(false);
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className={`${styles['form-control']}`}>
				<div className={styles['form-group']}>
					<label>Username</label>
					<input type="text" onChange={userInputChangeHandler} />
				</div>
				<div className={styles['form-group']}>
					<label>Age(Years)</label>
					<input type="number" onChange={userYearsInputChangeHandler} />
				</div>
			</div>
			<Button type="submit">Add user</Button>

			<div id={styles.warningWindow} className={`${!isValid && !isOkClicked ? styles.visible : styles.hidden}`}>
				<div className={styles.warningHeading}>Invalid Input</div>
				<div className={styles.warningMsg}>Please enter a valid name and age.(non-empty valyes).</div>
				<div className={styles.buttonOkCont}>
					<button onClick={clickOkBtn}>Okay</button>
				</div>
			</div>
		</form>
	);
};

export default UserInput;

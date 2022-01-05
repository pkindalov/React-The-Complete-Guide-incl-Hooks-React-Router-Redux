import React, { useState } from 'react';
import styles from './UserList.module.css';
import Button from '../UI/Button/Button';
import UserInput from '../UserInput/UserInput';

const UserList = (props) => {
	let parentUsers = props.items;
	let [users, setUsers] = useState([]);
	users = parentUsers;
	const showHideEditForm = event => {
		const userId = event.target.id;
		setUsers(prevUsers => {
			let userIndex = null;
			parentUsers.filter((u, i) => {
				if(u.id === userId) userIndex = i;
				return i;	
			});
			
			let updatedUsers = [...parentUsers];
			if(userIndex !== null) {
				let copiedUsers = parentUsers.slice(0); //get copy of the users array
				let editedUser = copiedUsers[userIndex];
				editedUser.editing = !editedUser.editing;
				updatedUsers = [...copiedUsers];
			}
			return updatedUsers;
		});
	}
	
	return (
		<div>
			{users.map((user) => (
				<div className={styles['user-goal']} key={user.id} id={user.id}>
					{user.username + ' (' + user.age + ' years old)'}
					<div>
						<Button key={user.id} id={user.id} onClick={showHideEditForm}>Edit</Button>&nbsp;
						<Button key={user.id+'-delete'} id={user.id} onClick={props.deleteUser}>Delete</Button>
					</div>
					<div className={user.editing ? styles.visible : styles.hidden}>
						<UserInput
                            key={user.id}
                            id={user.id}
							onEditUser={props.editUser}
							isUserInputValid={props.isUserInputValid}
                            username={user.username}
                            age={user.age}
							btnText="Save Changes"
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default UserList;

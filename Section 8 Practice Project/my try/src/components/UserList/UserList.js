import React from 'react';
import styles from './UserList.module.css';
import Button from '../UI/Button/Button';
import UserInput from '../UserInput/UserInput';

const UserList = (props) => {
	return (
		<div>
			{props.items.map((user) => (
				<div className={styles['user-goal']} key={user.id} id={user.id}>
					{user.username + ' (' + user.age + ' years old)'}
					<div>
						<Button type="">Edit</Button>
					</div>
					<div>
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

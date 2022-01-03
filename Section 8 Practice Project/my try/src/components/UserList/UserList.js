import React from "react";
import styles from './UserList.module.css';

const UserList = props => {

    return (
        <div>
           {props.items.map(user => (
               <div className={styles['user-goal']} key={user.id} id={user.id}>
                   {user.username + ' (' + user.age + ' years old)'}
               </div>
           ))}
        </div>
    );
}

export default UserList;
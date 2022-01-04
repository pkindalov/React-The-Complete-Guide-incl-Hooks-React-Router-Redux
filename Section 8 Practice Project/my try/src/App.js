import React, { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';
import './App.css';

function App() {
  const [isFormValid, setIsFormValid] = useState(true);
  const [users, setUsers] = useState([]);
  let content = '';

  const isUserInputValid = (isValid) => {
    if (!isValid) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
  }

  const addUser = (user) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ username: user.username, age: user.age, id: Math.random().toString() });
      return updatedUsers;
    });
  }

  const editUser = (user) => {
    setUsers(prevUsers => {
      let userForEditIndex = null;

      prevUsers.filter((u, i) => {
        if (u.id === user.id) userForEditIndex = i;
        return i;
      });

      let updatedUsers = [...prevUsers];
      if (userForEditIndex !== null) {
        let users = prevUsers.slice(0); //get copy of the users array
        let editedUser = users[userForEditIndex];
        editedUser.username = user.username;
        editedUser.age = user.age;
        updatedUsers = [...users];
      }

      return updatedUsers;
    });
  }

  if (users.length > 0) {
    content = (<UserList items={users} isUserInputValid={isUserInputValid} editUser={editUser} />);
  }


  return (
    <div className={`${!isFormValid ? 'blackOverlay' : ''}`}>
      <section id='user-form'>
        <UserInput onAddUser={addUser} isUserInputValid={isUserInputValid} />
      </section>
      <section id='users' className={users.length > 0 ? 'visible' : 'hidden'}>
        {content}
      </section>
    </div>
  );
}

export default App;

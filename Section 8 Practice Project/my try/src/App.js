import React, {useState} from 'react';
import UserInput from  './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';
import './App.css';

function App() {
  const [isFormValid, setIsFormValid] = useState(true);
  const [users, setUsers] = useState([]);
  let content =  '';

  const isUserInputValid = (isValid) => {
    if(!isValid) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
  }

  const addUser = (user) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({username: user.username, age: user.age, id: Math.random().toString()});
      return updatedUsers;
    });
  }

  if(users.length > 0) {
    content = (<UserList items={users} />);
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

import React, { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';
import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  const [isFormValid, setIsFormValid] = useState(true);
  const [users, setUsers] = useState([]);
  let limit = 5;
  let [page, setPage] = useState(1);
  let [nextPage, setNextPage] = useState(page + 1);
  let [prevPage, setPrevPage] = useState(page - 1);
  let [offset, setOffset] = useState((page - 1) * limit);
  let [totalPagesCount, setTotalPagesCount] = useState(users.length);
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
      // let parentUsers = [...props.items].map(user => Object.assign(user, {...user, editing: false}));
      const updatedUsers = [...prevUsers].map(user => Object.assign(user, { ...user, editing: false }));
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

  const deleteUser = (event) => {
    const userId = event.target.id;
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.id !== userId);
    });
  }


  const onNextPage = (event) => {
    setPage(nextPage => {
      nextPage++;
      return nextPage > totalPages ? totalPages : nextPage;
    });
    offset = setOffset(oldOffset => {
      return (page - 1) * limit;
    });
  }


  const onPrevPage = (event) => {
    setPage(prevPage => {
      prevPage--;
      return prevPage === 0 ? 1 : prevPage;
    });
    offset = setOffset(oldOffset => {
      return (page - 1) * limit;
    });
  }

  let totalPages = totalPagesCount;
  let currentOffset = offset;
  if (users.length > 0) {
    currentOffset = (page - 1) * limit;
    totalPages = Math.ceil(users.length / limit);
    let paginatedUsers = users.slice(currentOffset, limit + currentOffset);
    content = (<UserList items={paginatedUsers} isUserInputValid={isUserInputValid} editUser={editUser} deleteUser={deleteUser} />);
  }


  return (
    <div className={`${!isFormValid ? 'blackOverlay' : ''}`}>
      <section id='user-form'>
        <UserInput onAddUser={addUser} isUserInputValid={isUserInputValid} />
      </section>
      <section id='users' className={users.length > 0 ? 'visible' : 'hidden'}>
        {content}
        {page < totalPages && <Button onClick={onNextPage}>Next</Button>}&nbsp;
        {page > 1 && <Button onClick={onPrevPage}>Prev</Button>}

      </section>
    </div>
  );
}

export default App;

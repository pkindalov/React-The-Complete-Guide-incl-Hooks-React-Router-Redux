import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import Card from './components/UI/Card';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers(prevUsers => [...prevUsers, user]);
  }

  return (
    <div>
      <Card>
        <AddUser onAddUser={addUser} />
      </Card>
    </div>
  );
}

export default App;

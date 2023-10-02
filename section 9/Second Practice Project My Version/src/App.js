import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import Card from "./components/UI/Card";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  // console.log(users);

  return (
    <div>
      <Card cssClsNames={['card-user__width']}>
        <AddUser onAddUser={addUser} />
      </Card>
      {users.length > 0 && <UserList usersData={users} />}
    </div>
  );
}

export default App;

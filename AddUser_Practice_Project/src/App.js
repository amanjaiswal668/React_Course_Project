import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  // For the first time the uName and uAge is null or empty. Hence when the page loads we see no user added in the list.
  // But after the user adds a new user in to the list, the values of them are assigned to the uName and uAge.

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString }]
    })
  }
  return (
    // <React.StrictMode>

    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
    // </React.StrictMode>
  );

}

export default App;

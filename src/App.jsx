import React from "react";
import { useState, useEffect } from "react";
import Users from "./components/Users";
import UserItem from "./components/UserItem";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setUsers(data);
          console.log(data);
        });
    };

    getData();
  }, []);

  if (!users) {
    return <h1>Not Found</h1>;
  }

  // 3. Use a hook to make the API request when the app loads.
  // 4. Create Users and UserItem components
  // 5. Pass down the users state into the Users component, loop through it, and render UserItem components
  // 6. Add event listeners to each UserItem, that when clicked will console.log() that UserItems unique ID

  return (
    <div className='container'>
      <h1>See instructions commented out in App.jsx!</h1>
      <Users users={users} />
      <UserItem />
    </div>
  );
}

export default App;




import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios.get('/api/users')
      .then((response) => {

        console.log(response.data);

        // agar backend { users: [...] } bhej raha hai
        setUsers(response.data.users);

      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });

  }, []);

  return (
    <div className="app">

      <h1>Users</h1>

      <ul>
        {Array.isArray(users) &&
          users.map((user) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default App
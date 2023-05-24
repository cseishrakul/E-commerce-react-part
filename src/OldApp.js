import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  /* via axios

  const fetchData = () => {
    return axios
      .get("http://127.0.01:8000/api/users")
      .then((response) => setUser(response.data['users']));
  }; */

  // Via fetch
  const fetchData = () => {
    return fetch("http://127.0.0.1:8000/api/users")
      .then((response) => response.json())
      .then((data) => setUser(data['users']));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>User List:</h1>
      {user &&
        user.length > 0 &&
        user.map((userObj, index) => (
          <li key={userObj.id}> {userObj.name} </li>
        ))}
    </div>
  );
}

export default App;

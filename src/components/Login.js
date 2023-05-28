import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function LoginUser() {
    let item = { email, password };
    // console.log(item);

    let result = await fetch("http://127.0.0.1:8000/api/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.log("result", result);
    navigate("/account");
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h2 className="">Login User</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="********"
      />
      <br />
      <button className="btn btn-primary" onClick={LoginUser}>
        Login
      </button>
    </div>
  );
};

export default Login;

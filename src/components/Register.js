import React, { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function save() {
    let filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (name == "") {
      alert("Please Enter Your Name");
    } else if (email == "") {
      alert("Please Enter Your Email");
    } else if (!filter.test(email)) {
      alert("Please Enter Valid Email");
    } else if (mobile == "") {
      alert("Please Enter Your Mobile Number");
    } else if (password == "") {
      alert("Please Enter Your Password");
    } else {
      let item = { name, email, mobile, password };
      // console.warn(item);
      let result = await fetch("http://127.0.0.1:8000/api/register-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      result = await result.json();
      console.log("result", result);
      if (result["email"] == "Email already exists") {
        alert(result["email"]);
      } else {
        navigate("/thanks");
      }
    }
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1 className="">Register</h1> <br />
      Name:{" "}
      <input
        type="text"
        className="form-control"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      Email:{" "}
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      Mobile:{" "}
      <input
        type="text"
        className="form-control"
        placeholder="Mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />{" "}
      <br />
      Password:{" "}
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br />
      <button onClick={save} className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default Register;

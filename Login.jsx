import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedData = JSON.parse(localStorage.getItem("studentData"));

    if (!savedData) {
      setMsg("No user registered yet!");
      return;
    }

    if (savedData.email === email && savedData.password === password) {
      // Set Login status
      localStorage.setItem("loggedInUser", JSON.stringify(savedData));
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      setMsg("Invalid Credentials!");
    }
  };

  return (
    <div className="container">
      <h2>Student Login</h2>

      {msg && <p className="error">{msg}</p>}

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)} /> 
        <input type="password" placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Login</button>
      </form> <br/>

      <p>Don't have an account? <a href="/">Signup</a></p>
    </div>
  );
}




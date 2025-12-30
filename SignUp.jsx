import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    usn: "",
    password: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.usn || !form.password) {
      setError("All fields are required!");
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(form.email)) {
      setError("Enter a valid Gmail address!");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    localStorage.setItem("studentData", JSON.stringify(form));

    alert("Registration Successful! Please login now.");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Student Signup</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} /> <br/> <br/>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br/><br/>
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} /><br/><br/>
        <input type="text" name="usn" placeholder="USN" onChange={handleChange} /><br/><br/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br/><br/>

        <button type="submit">Sign Up</button>
      </form> <br/>

      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}


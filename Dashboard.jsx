import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="container dashboard-box">
      <h2>Welcome To Dashboard </h2>
      <p>You have successfully logged in to Dashboard!</p>

      <button onClick={() => navigate("/profile")}>
        Profile
      </button>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}




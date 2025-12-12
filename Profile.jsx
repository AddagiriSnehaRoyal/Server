import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("studentData"));

  if (!userData) {
    return (
      <div className="container">
        <h2>No Profile Data Found</h2>
        <button onClick={() => navigate("/dashboard")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="container profile-box">
      <h2>Student Profile</h2>

      <div className="profile-details">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone:</strong> {userData.phone}</p>
        <p><strong>USN:</strong> {userData.usn}</p>
        <p><strong>Password:</strong> {userData.password}</p>
      </div>

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}

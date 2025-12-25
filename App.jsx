import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './SignUp'
import Login from './Login'
import Welcome from './Welcome'
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import "./App.css";

function App() {
   
       return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
  
}

export default App
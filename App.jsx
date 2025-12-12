import React, { lazy, Suspense }from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './SignUp';
import Login from './Login';
import Welcome from './Welcome';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import "./App.css";

const Profile = lazy(() => import("./Profile"));


function App() {
  return (
    <Router>
        <Suspense fallback={<h2 style={{ textAlign: "center" }}>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
           <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
      </Routes>
        </Suspense>
    </Router>
  );
}

export default App;

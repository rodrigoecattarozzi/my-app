import React from "react";
import Login from "./Login";
import NavBar from "./NavBar";
import OsList from "./OsList";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import { useState, useEffect } from "react";
import { AuthProvider } from "./AuthContext";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <header>
          <NavBar />
        </header>
        <div className="container">
          <Routes>
          {/* <Route path="/" element={<Profile />} /> */}
            <Route
              path="/"
              element={
                !currentUser?.emailVerified ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Profile />
                )
              }
            />
            <Route
              path="/profile"
              element={
                !currentUser?.emailVerified ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Profile />
                )
              }
            />
            <Route
              path="/list"
              element={
                !currentUser?.emailVerified ? (
                  <Navigate to="/login" replace />
                ) : (
                  <OsList />
                )
              }
            />
            <Route
              path="/login"
              element={
                !currentUser?.emailVerified ? (
                  <Login />
                ) : (
                  <Navigate to="/profile" replace />
                )
              }
            />
            <Route
              path="/register"
              element={
                !currentUser?.emailVerified ? (
                  <Register />
                ) : (
                  <Navigate to="/profile" replace />
                )
              }
            />
          </Routes>
        </div>
      </AuthProvider>
  );
}

export default App;

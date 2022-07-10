import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "./AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setTimeActive } = useAuthValue();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate("/verify-email");
            })
            .catch((err) => alert(err.message));
        } else {
          navigate("/");
        }
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="row">
      <h3>Iniciar sesión</h3>
      {error && <div className="auth__error">{error}</div>}
      <form className="col s12" onSubmit={login} name="login_form">
        <div className="row">
          <div className="input-field col s6">
            <input
              id="email"
              type="email"
              className="validate active"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="active" for="email">Email</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              id="password"
              value={password}
              required
              type="password"
              className="validate active"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="active" for="password">Contraseña</label>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have and account?
        <Link to="/register">Create one here</Link>
      </p>
    </div>
  );
}

export default Login;

import React from "react";

import { useState } from "react";
import { auth } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useAuthValue } from "./AuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setTimeActive } = useAuthValue();

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate("/verify-email");
            })
            .catch((err) => alert(err.message));
        })
        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="row">
      <h3>Registrarse</h3>
      {error && <div className="auth__error">{error}</div>}
      <form className="col s12" onSubmit={register} name="registration_form">
        {/* <div class="row">
                <div class="input-field col s3">
                    <input id="first_name" type="text" class="validate" autoFocus />
                    <label for="first_name">Nombre</label>
                </div>

                <div class="input-field col s3">
                    <input id="last_name" type="text" class="validate" />
                    <label for="last_name">Apellido</label>
                </div>
            </div> */}

        <div className="row">
          <div className="input-field col s6">
            <input
              id="email"
              value={email}
              type="email"
              className="validate active"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="active" for="email">
              Email
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s3">
            <input
              id="password1"
              value={password}
              type="password"
              className="validate active"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="active" for="password1">
              Contraseña
            </label>
          </div>

          <div className="input-field col s3">
            <input
              id="password2"
              value={confirmPassword}
              type="password"
              className="validate active"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label className="active" for="password2">
              Repetir Contraseña
            </label>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      <span>
        Already have an account?
        <Link to="/login">login</Link>
      </span>
    </div>
  );
}

export default Register;

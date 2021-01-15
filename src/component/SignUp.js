import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "../component/SignUp.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="signup_container">
      <div className="branding">
        <h1>Test</h1>
        <p>Seller</p>
      </div>
      <div className="container">
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && <p variant="danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div id="email">
            <label id="login-label">Email</label>
            <input type="email" ref={emailRef} required />
          </div>
          <div id="password">
            <label id="login-label">Password</label>
            <input type="password" ref={passwordRef} required />
          </div>
          <div id="password-confirm">
            <label id="login-label">Password Confirmation</label>
            <input type="password" ref={passwordConfirmRef} required />
          </div>
          <button disabled={loading} className="w-100" type="submit">
            Sign Up
          </button>
        </form>

        <div className="bottom w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}

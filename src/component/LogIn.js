import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as powerjson from "../resources/green.json";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: powerjson.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
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
        <h2 className="text-center mb-4">Log In</h2>
        {error && <p variant="danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div id="email">
            <label id="signup-label">Email</label>
            <input type="email" ref={emailRef} required />
          </div>
          <div id="password">
            <label id="signup-label">Password</label>
            <input type="password" ref={passwordRef} required />
          </div>
          <button disabled={loading} className="login-button w-100" type="submit">
            Log In
          </button>
        </form>
        <div className="w-100 text-center mt-3">
          <Link to="/forgot-password" style={{ textDecoration: "none" }}>
            <p className="forgot-pass">Forgot Password?</p>
          </Link>
        </div>

        {!loading && (
          <div className="w-100 text-center mt-2">
            <p className="needacc">Need an account?</p>{" "}
            <Link style={{ textDecoration: "none" }} to="/signup">
              <p className="signup-link">Sign Up</p>
            </Link>
          </div>
        )}
      </div>

      <div>
        {loading && (
          <FadeIn delay={0}>
            <div class="loading-anim">
              <Lottie options={defaultOptions} height={30} width={30} />
              <p class="logging-in">
                <small>Loggin you in</small>
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}

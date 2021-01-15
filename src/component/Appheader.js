import "./appheader.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

function Appheader() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="header">
      <Link style={{ textDecoration: "none", color: "black" }} to="/Dashboard">
        <div className="Brand">
          Test
          <p
            style={{
              textAlign: "right",
              fontWeight: "regular",
              fontStyle: "italic",
              fontSize: "10px",
              color: "gray",
            }}
          >
            seller
          </p>
        </div>
      </Link>

      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-list"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>

      <div className="search-container">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-search"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
          />
          <path
            fill-rule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
        </svg>
        <input
          className="search_input"
          placeholder="Search.."
          type="text"
          name="name"
        />
      </div>

      <div className="store-name-container">
        <p className="store_name"><small>Test Vendor</small></p>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-chevron-down"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>

      <div className="header-buttons-container">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-envelope"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
          />
        </svg>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-bell"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
          <path
            fill-rule="evenodd"
            d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
          />
        </svg>

        <button className="logout-button" onClick={handleLogout}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-power"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z"
            />
            <path fill-rule="evenodd" d="M7.5 8V1h1v7h-1z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Appheader;

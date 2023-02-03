import React from "react";
import { Link } from "react-router-dom";
import "./style/notfound.css";
export default function NotFound() {
  return (
    <div className="notfound">
      <h1>404 error...</h1>
      <h3>Page Not Found</h3>
      <p>
        Go back to <Link to="/">Home Page</Link>?
      </p>
    </div>
  );
}

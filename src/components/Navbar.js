import React from "react";
import { Link } from "react-router-dom";
import "./style/navbar.css";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h1>BlogIcon</h1>
      </Link>
    </nav>
  );
}

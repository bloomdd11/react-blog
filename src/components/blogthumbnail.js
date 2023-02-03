import React from "react";
import { Link } from "react-router-dom";
import "./style/blogthumbnail.css";

export default function Blogthumbnail({ blogdetails }) {
  const { title, author, detail, id } = blogdetails;
  return (
    <div className="blogthumbnail">
      <Link to={`singleblog/${id}`}>
        <h1>{title}</h1>
      </Link>
      <p className="author">{author}</p>
      <p className="detail">
        {detail.slice(0, detail.length / 5)}
        <Link to={`singleblog/${id}`} className="more">
          more...
        </Link>
      </p>
    </div>
  );
}

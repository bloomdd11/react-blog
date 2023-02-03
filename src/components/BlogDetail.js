import React from "react";
import "./style/blogdetail.css";

export default function BlogDetail({ data }) {
  const { title, author, detail } = data;
  return (
    <section className="blog-detail-wrapper">
      <div className="blog-detail">
        <h1 className="detail-header">{title}</h1>
        <p className="detail-author">{author}</p>
        <p className="main-detail">{detail}</p>
      </div>
    </section>
  );
}

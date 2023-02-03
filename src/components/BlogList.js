import React from "react";
import { blogData } from "../data";
import Blogthumbnail from "./blogthumbnail";
import "./style/bloglist.css";

export default function BlogList() {
  return (
    <main>
      <section>
        {blogData.map((item) => (
          <Blogthumbnail key={item.id} blogdetails={item}></Blogthumbnail>
        ))}
      </section>
    </main>
  );
}

import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function SingleBlog({ blogId = 0 }) {
  return (
    <>
      <Navbar></Navbar>
      Single blog - {blogId}
      <Footer></Footer>
    </>
  );
}

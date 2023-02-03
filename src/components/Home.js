import React from "react";
import BlogList from "./BlogList";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <BlogList></BlogList>
      <Footer></Footer>
    </div>
  );
}

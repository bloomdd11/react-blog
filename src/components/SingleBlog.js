import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BlogDetail from "./BlogDetail";
import { blogData } from "../data";

export default function SingleBlog({ blogId }) {
  const [details, setDetails] = useState({});
  useEffect(() => {
    let tempDetails = blogData.filter((item) => item.id === Number(blogId));
    setDetails(...tempDetails);
  }, [blogId]);
  return (
    <>
      <Navbar></Navbar>
      <BlogDetail data={details}></BlogDetail>
      <Footer></Footer>
    </>
  );
}

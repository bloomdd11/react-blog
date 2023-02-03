import React from "react";
import { Home, SingleBlog, NotFound } from "./components";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";

const PassIDToSingleBlog = () => {
  const { blogID } = useParams();
  return <SingleBlog blogId={blogID}></SingleBlog>;
};

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="singleblog/:blogID"
            element={<PassIDToSingleBlog></PassIDToSingleBlog>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

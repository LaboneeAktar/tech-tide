import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils/utilities";
import Blog from "./Blogs/Blog";
import EmptyState from "../Components/EmptyState";
import wave from "../assets/wave.svg";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  // Delete Blog
  const handleDelete = (id) => {
    deleteBlog(id);
    const savedBlogs = getBlogs();
    setBlogs(savedBlogs);
  };

  if (blogs.length < 1) {
    return (
      <>
        <EmptyState
          message="No Bookmarks Available!"
          address="/blogs"
          label="Browse Blogs"
        />
        <img className="absolute bottom-0 w-full -z-10" src={wave} alt="" />
      </>
    );
  }

  return (
    <div className="grid px-4 md:px-8 lg:px-12 pt-20 pb-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <Blog
          deletable={true}
          key={blog.id}
          blog={blog}
          handleDelete={handleDelete}
        ></Blog>
      ))}
    </div>
  );
};

export default Bookmarks;

import { useLoaderData } from "react-router-dom";

const Content = () => {
  const blog = useLoaderData();
  return (
    <div>
      <h1>HI Content : {blog.title}</h1>
    </div>
  );
};

export default Content;

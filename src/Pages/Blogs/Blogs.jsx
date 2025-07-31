import { Link, useLoaderData } from "react-router-dom";
import Blog from "./Blog";
import placeHolderImg from "../../assets/404-img.jpg";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <section className=" dark:bg-gray-100 text-gray-100 dark:text-gray-800 mt-10">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          to={`/blogs/${blogs[4].id}`}
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-slate-200 dark:bg-gray-50 rounded-md"
        >
          <img
            src={blogs[4].cover_image || placeHolderImg}
            alt=""
            className="object-fit w-full h-64 rounded sm:h-96 lg:col-span-7"
          />
          <div className="p-6 space-y-2 lg:col-span-5 bg-slate-200 text-black rounded-md">
            <h3 className="text-2xl font-semibold sm:text-3xl sm:w-full pt-6">
              {blogs[4].title}
            </h3>
            <span className="text-md py-4 text-gray-600 dark:text-gray-600">
              {new Date(blogs[4].published_at).toLocaleDateString()}
            </span>
            <p className="mt-2">{blogs[4].description}</p>
          </div>
        </Link>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

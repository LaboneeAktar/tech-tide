import { Link } from "react-router-dom";
import placeHolderImg from "../../assets/404-img.jpg";
import { MdDeleteForever } from "react-icons/md";

const Blog = ({ blog, deletable, handleDelete }) => {
  const { id, cover_image, title, published_at, description } = blog;
  return (
    <div className="flex relative">
      <Link
        to={`/blogs/${id}`}
        className="h-full max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 rounded-md border-[.5px] border-slate-300 transition-all border-opacity-30 hover:scale-105 hover:shadow-lg hover:border-secondary flex flex-col "
      >
        <img
          role="presentation"
          className="object-fit w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
          src={cover_image || placeHolderImg}
        />
        <div className="p-6 space-y-2 text-black bg-gray-100 flex-grow">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-md text-gray-600 dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p className="mt-2">{description}</p>
        </div>
      </Link>
      {deletable && (
        <div
          onClick={() => {
            handleDelete(id);
          }}
          className="absolute bg-slate-300 p-3 ml-5 rounded-full cursor-pointer hover:scale-110 overflow-hidden -top-5 -right-4"
        >
          <MdDeleteForever size={26} className="text-secondary" />
        </div>
      )}
    </div>
  );
};

export default Blog;

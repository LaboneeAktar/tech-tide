import { Link } from "react-router-dom";
import placeHolderImg from "../../assets/404-img.jpg";

const Blog = ({ blog }) => {
  const { id, cover_image, title, published_at, description } = blog;
  return (
    <div>
      <Link
        to={`/blogs/${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50 rounded-md"
      >
        <img
          role="presentation"
          className="object-fit w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
          src={cover_image || placeHolderImg}
        />
        <div className="p-6 space-y-2 bg-slate-200 text-black">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-md text-gray-600 dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p className="mt-2">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;

import { useLoaderData } from "react-router-dom";
import placeHolderImg from "../assets/404-img.jpg";
import Markdown from "https://esm.sh/react-markdown@10";
import rehypeRaw from "https://esm.sh/rehype-raw@7";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title, tags, body_html } = blog;
  return (
    <div className=" group hover:no-underline focus:no-underline dark:bg-gray-50 border-[1px] border-gray-200 rounded-t-sm">
      <img
        role="presentation"
        className="w-full h-52 object-fit bg-gray-500 dark:bg-gray-500 rounded-t-sm"
        src={cover_image || placeHolderImg}
      />

      <div className="mt-8 border-t border-dashed border-gray-300"></div>
      <div className="flex flex-wrap py-6 gap-2 ">
        {tags.map((tag) => (
          <h4 key={tag} className="px-3 py-1 ">
            #{tag}
          </h4>
        ))}
      </div>

      <div className="pl-2 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;

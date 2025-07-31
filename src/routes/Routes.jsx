import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import Content from "../Components/Content";
import Author from "../Components/Author";
import Loader from "../Components/Loader";
import ErrorPage from "../Components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
        HydrateFallback: () => <Loader />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        HydrateFallback: () => <Loader />,
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
            HydrateFallback: () => <Loader />,
          },
          {
            path: "author",
            element: <Author />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
            HydrateFallback: () => <Loader />,
          },
        ],
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);

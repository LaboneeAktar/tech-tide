import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import errorImg from "../assets/404-PageNotFound.jpg";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white ">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center mx-auto text-center">
          <span>
            <img src={errorImg} className="h-44 w-56 rounded-2xl" alt="" />
          </span>

          <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
            Something Went Wrong!
          </h1>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center w-1/2 cursor-pointer px-5 py-1 border rounded-lg hover:bg-secondary transition hover:ease-in hover:duration-500 hover:scale-102 hover:border-0 gap-2"
            >
              <BiArrowBack />

              <span>Go back</span>
            </button>

            <button
              onClick={() => navigate("/")}
              className="cursor-pointer px-5 py-1 border rounded-lg hover:bg-secondary transition hover:ease-in hover:duration-500 hover:scale-102 hover:border-0 text-nowrap"
            >
              Take Me Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;

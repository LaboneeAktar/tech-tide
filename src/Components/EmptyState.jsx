import { Link } from "react-router-dom";

const EmptyState = ({ message, address, label }) => {
  return (
    <div className="min-h-[calc(100vh-116px)] gap-5 flex flex-col justify-center items-center pb-16 ">
      <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>

      <Link to={address} className="relative inline-block text-lg group">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-primary rounded-lg group-hover:text-primary">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-secondary opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">{label}</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </Link>
    </div>
  );
};

export default EmptyState;

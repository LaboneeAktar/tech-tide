import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = (e) => {
    // e.preventDefault();
    setTheme((prevTheme) => (prevTheme === "light" ? "synthwave" : "light"));
    setIsChecked(e.target.checked);
  };

  const link = (
    <>
      <NavLink to="/">
        {({ isActive }) => (
          <span className={isActive ? "text-primary" : "hover:text-secondary"}>
            Home
          </span>
        )}
      </NavLink>
      <NavLink to="/blogs">
        {({ isActive }) => (
          <span className={isActive ? "text-primary " : "hover:text-secondary"}>
            Blogs
          </span>
        )}
      </NavLink>
      <NavLink to="/bookmarks">
        {({ isActive }) => (
          <span className={isActive ? "text-primary " : "hover:text-secondary"}>
            Bookmarks
          </span>
        )}
      </NavLink>

      <label className="toggle text-base-content mt-1">
        <input
          onChange={toggleTheme}
          type="checkbox"
          className="theme-controller"
          checked={isChecked}
        />

        <svg
          aria-label="sun"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </g>
        </svg>

        <svg
          aria-label="moon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </g>
        </svg>
      </label>
    </>
  );
  return (
    <div>
      <div>
        <div className="navbar bg-base-100 shadow-lg fixed z-10 lg:mb-4 lg:px-10">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {link}
              </ul>
            </div>
            <div>
              <Link to="/">
                {" "}
                <h2 className="text-4xl font-bold text-secondary cursor-pointer">
                  Tech<span className="text-primary">Tide</span>
                </h2>
              </Link>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex lg:items-center">
            <ul className="flex gap-5 py-4 text-xl font-semibold cursor-pointer ">
              {link}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

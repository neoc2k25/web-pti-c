import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav
      className={`bg-neutral-primary fixed w-full z-60 top-0 start-0 backdrop-filter backdrop-blur-sm bg-opacity-10 `}
    >
      <div className="max-w-7xl flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4 ">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/logo-removebg-preview.png"
            className="w-10"
            alt="Logo Neo-c"
          />
          {/* <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            Flowbite
          </span> */}
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary text-white border border-white"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setOpenNav(!openNav)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>

        <div
          className={`${
            openNav
              ? "block md:flex md:justify-end"
              : "hidden md:flex md:justify-end"
          } w-full `}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-base bg-neutral-secondary-soft space-y-4 md:space-y-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <Link
                to={`/`}
                className={`py-2 text-white text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent transition-all duration-300 text-outline`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={`/tim`}
                className={`py-2 text-white text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent transition-all duration-300 text-outline`}
              >
                Tim
              </Link>
            </li>
            <li>
              <Link
                to={`/positron`}
                className={`py-2 text-white text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent transition-all duration-300 text-outline`}
              >
                Positron
              </Link>
            </li>
            <li>
              <Link
                to={`/album`}
                className={`py-2 text-white text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent transition-all duration-300 text-outline`}
              >
                Album
              </Link>
            </li>
            <li>
              <Link
                to={`/kontak`}
                className={`py-2 text-white text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent transition-all duration-300 text-outline`}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

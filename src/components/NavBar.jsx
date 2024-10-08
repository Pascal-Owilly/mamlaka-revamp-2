import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="/">
        <img src={logo} alt="logo" className="w-[266px] h-[72.14px]" />
      </a>
      {/* Desktop view */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.title}
            className={`font-bitter cursor-pointer text-[16px] ${
              active === nav.title ? "#222b5b" : "#222b5b"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a
              href={nav.url}
              className="relative hover:underline hover:underline-offset-6 hover:text-[#852890] transition-all duration-300"
            >
              {nav.title}
            </a> 
          </li>
        ))}
      </ul>

      {/* Mobile view */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.title}
                className={`font-bitter font-bold cursor-pointer text-[16px] ${
                  active === nav.title ? "#222b5b" : "#222b5b"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a
                  href={nav.url}
                  className="relative hover:underline hover:underline-offset-6 hover:text-[#852890] transition-all duration-300"
                >
                  {nav.title}
                </a> 
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

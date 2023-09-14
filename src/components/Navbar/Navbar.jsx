import React, { Fragment, useState } from "react";
import logo from "../../assets/Screen Shot 2023-07-31 at 2.01 2.svg";
import pdf_icon from "../../assets/pdf-icon.svg";

const navLinks = [
  { name: "HOME", id: 0, href: "#home" },
  { name: "ABOUT", id: 1, href: "#about" },
  { name: "SERVICES", id: 2, href: "#services" },
  { name: "CONTACT", id: 3, href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const genericHamburgerLine = `h-1 w-6 my-1 bg-black transition ease transform duration-300`;

  return (
    <Fragment>
      {/* DESKTOP */}
      <nav className="shadow-slate-300 shadow-md bg-white hidden lg:block w-full fixed z-10">
        <div className="container mx-auto flex justify-between items-center lg:px-14 py-2">
          <div className="flex gap-6">
            <img src={logo} alt="" />
            <div className="flex flex-col justify-end">
              <p className="text-midnightGreen font-['DM_Sans'] font-medium text-[28px] leading-[58px] lg:leading-normal">
                Prime Care
              </p>
              <p className="text-xl font-['DM_Sans'] font-medium">
                Walk-in Clinic
              </p>
            </div>
          </div>
          <ul className="list-none flex uppercase gap-10 text-xl font-['DM_Sans'] leading-[35.8px]">
            {navLinks.map((elem) => (
              <li key={elem.key}>
                <a
                  href={elem.href}
                  className="hover:text-midnightGreen transition-[0.25s] text-[16px]"
                >
                  {elem.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <img src={pdf_icon} alt="" />
            <button className="bg-midnightGreen text-white text-[16px] font-medium rounded-3xl px-6 py-3 hover:bg-[#328495] transition-[0.25s] uppercase">
              Download Requisition
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE */}
      <div className="flex justify-between w-screen items-center lg:hidden py-2 px-6 fixed z-30 bg-white shadow-lg">
        <h3>
          <img src={logo} alt="" />
        </h3>
        <button
          className="flex flex-col h-12 w-12 justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "rotate-45 translate-y-3" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "left-0 h-[57%] w-screen" : "left-[-1000px] h-[57%] w-screen"
        } transition-all duration-700 fixed bg-midnightGreen z-20 pt-48 lg:hidden`}
      >
        <ul className="list-none uppercase gap-16 flex flex-col items-center justify-center">
          {navLinks.map((elem) => (
            <li key={elem.id}>
              <a
                href={elem.href}
                className="flex gap-2 text-white text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {elem.name}
                {elem.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;

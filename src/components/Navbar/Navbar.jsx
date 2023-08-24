import React, { Fragment, useState } from "react";
import logo from "../../assets/Screen Shot 2023-07-31 at 2.01 2.svg";
import pdf_icon from "../../assets/pdf-icon.svg";
import openNav from "../../assets/Hamburger.svg";
import closeNav from "../../assets/cross.svg";

const navLinks = [
  { name: "HOME", id: 0, href: "#home" },
  { name: "ABOUT", id: 1, href: "#about" },
  { name: "SERVICES", id: 2, href: "#services" },
  { name: "CONTACT", id: 3, href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      {/* DESKTOP */}
      <nav className="shadow-slate-300 shadow-md bg-white hidden lg:block w-full fixed z-10">
        <div className="container mx-auto flex justify-between items-center lg:px-14 py-2">
          <div className="flex gap-6">
            <img src={logo} alt="" />
            <div className="flex flex-col justify-end">
              <p className="text-midnightGreen font-['DM_Sans'] font-medium text-[28px] line-height-[58px]">
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
      <nav
        className={`${
          isOpen ? "shadow-slate-300 shadow-md bg-white" : "bg-transparent"
        } lg:hidden flex justify-between w-full fixed z-10`}
      >
        <a href="">
          <img src={logo} alt="" />
        </a>
        <button
          onClick={toggleHandler}
          className={isOpen ? "block pe-4" : "hidden"}
        >
          <img src={openNav} alt="" />
        </button>
        <div
          className={
            isOpen ? "hidden" : "#000] flex justify-center w-full h-screen"
          }
        >
          <div className="flex flex-col bg-midnightGreen gap-6 h-[61%] w-screen">
            <div className="bg-white flex justify-between">
              <img src={logo} alt="" />
              <button className="pe-4" onClick={toggleHandler}>
                <img src={closeNav} alt="" />
              </button>
            </div>
            <div className="flex flex-col gap-10 pt-6">
              <ul className="list-none flex flex-col items-center gap-10">
                {navLinks.map((elem) => (
                  <li key={elem.id}>
                    <a
                      href={elem.href}
                      className="text-white hover:text-midnightGreen transition-[0.25s]"
                      key={elem.id}
                      onClick={toggleHandler}
                    >
                      {elem.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-center gap-5">
                <img src={pdf_icon} className="w-[32px] h-[45px] " alt="" />
                <button className="bg-white text-midnightGreen font-semibold rounded-3xl px-6 py-3 uppercase">
                  Download Requisition
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;

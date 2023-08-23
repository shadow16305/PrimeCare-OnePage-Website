import React, { Fragment } from "react";
import logo from "../../assets/Screen Shot 2023-07-31 at 2.01 2.svg";
import pdf_icon from "../../assets/pdf-icon.svg";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="shadow-slate-300 shadow-md hidden lg:block">
        <div className="container mx-auto flex justify-between items-center lg:px-14 py-3">
          <div className="flex gap-6">
            <a href="">
              <img src={logo} alt="" />
            </a>
            <div className="flex flex-col justify-end">
              <p className="text-midnightGreen font-['DM_Sans'] font-medium text-[32px] line-height-[58px]">
                Prime Care
              </p>
              <p className="text-xl font-['DM_Sans'] font-medium">
                Walk-in Clinic
              </p>
            </div>
          </div>
          <ul className="list-none flex uppercase gap-10 text-xl font-['DM_Sans'] leading-[35.8px]">
            <li>
              <a
                href=""
                className="hover:text-midnightGreen transition-[0.25s]"
              >
                home
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-midnightGreen transition-[0.25s]"
              >
                about us
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-midnightGreen transition-[0.25s]"
              >
                services
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-midnightGreen transition-[0.25s]"
              >
                contact
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-midnightGreen transition-[0.25s]"
              >
                careers
              </a>
            </li>
          </ul>
          <div className="flex gap-4">
            <img src={pdf_icon} alt="" />
            <button className="bg-midnightGreen text-white rounded-3xl px-6 py-3 hover:bg-[#328495] transition-[0.25s]">
              Download Requisition
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;

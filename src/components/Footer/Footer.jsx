import React, { Fragment } from "react";

import logo from "../../assets/Screen Shot 2023-07-31 at 2.01 2.svg";
import send_icon from "../../assets/Classic Filled.svg";

const Footer = () => {
  return (
    <Fragment>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center gap-20 px-14 py-20">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center lg:justify-start gap-6">
            <a href="">
              <img src={logo} alt="" />
            </a>
            <div className="flex flex-col justify-end">
              <p className="text-midnightGreen font-['DM_Sans'] font-medium text-[20px] lg:text-[32px] line-height-[58px]">
                Prime Care
              </p>
              <p className="text-xl font-['DM_Sans'] text-black font-medium">
                Walk-in Clinic
              </p>
            </div>
          </div>
          <p className="text-[20px] text-center lg:text-start text-[#403634] lg:max-w-[439px]">
            Lorem Ipsum is simply dummy text of the typesetting industry.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-10">
          <div className="flex flex-col text-center gap-2 lg:gap-4">
            <h3 className="text-[18px] lg:text-[32px] font-black">Company</h3>
            <a href="" className="body-2">
              Home
            </a>
            <a href="" className="body-2">
              Services
            </a>
            <a href="" className="body-2">
              Contact Us
            </a>
            <a href="" className="body-2">
              Career
            </a>
          </div>
        </div>
      </div>
      <div className="bg-midnightGreen text-center py-2">
        <h3 className="text-white text-[14px]">
          Prime Care -- Powered by SANEM K. -- Created by.
        </h3>
      </div>
    </Fragment>
  );
};

export default Footer;

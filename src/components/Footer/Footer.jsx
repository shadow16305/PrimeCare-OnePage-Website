import React, { Fragment } from "react";

import logo from "../../assets/Screen Shot 2023-07-31 at 2.01 2.svg";

const Footer = () => {
  return (
    <Fragment>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center gap-20 px-14 py-20">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center lg:justify-start gap-6">
            <a href="#home">
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
            <a href="#home" className="body-2">
              Home
            </a>
            <a href="#services" className="body-2">
              Services
            </a>
            <a href="#contact" className="body-2">
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:gap-4 items-center lg:ms-auto">
          <h3 className="text-[18px] lg:text-[32px] font-black">Call us</h3>
          <p className="text-lg">(416) 997 - 5559</p>
          <p className="text-lg">(365) 509 - 2982</p>
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

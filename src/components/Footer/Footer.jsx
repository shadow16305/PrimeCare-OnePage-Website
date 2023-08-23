import React, { Fragment } from "react";

import logo from "../../assets/Screen Shot 2023-07-31 at 2.01 2.svg";
import send_icon from "../../assets/Classic Filled.svg";

const Footer = () => {
  return (
    <Fragment>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-20 px-14 py-20">
        <div className="flex flex-col gap-10">
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
          <p className="text-[20px] text-[#403634] lg:max-w-[439px]">
            Lorem Ipsum is simply dummy text of the typesetting industry.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[32px]">Company</h3>
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
        <div className="flex flex-col gap-4">
          <h3 className="text-[32px]">Company</h3>
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
        <div className="flex flex-col gap-4">
          <h3 className="text-[32px]">Subscribe now!</h3>
          <p className="text-[20px] text-[#403634] lg:max-w-[447px]">
            Get daily interior inspiration, new products launches and more right
            to your inbox
          </p>
          <form action="" className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-black border-t-0 border-x-0 lg:w-[350px] py-3 focus:outline-none"
            />
            <button type="submit">
              <img src={send_icon} alt="" />
            </button>
          </form>
        </div>
      </div>
      <div className="bg-midnightGreen text-center py-2">
        <h3 className="text-white">
          Prime Care -- Powered by SANEM K. -- Created by.
        </h3>
      </div>
    </Fragment>
  );
};

export default Footer;

import React, { Fragment } from "react";
import image from "../../assets/b2.png";

const WorkHours = () => {
  return (
    <Fragment>
      <div className="container mx-auto flex flex-col items-center pt-10 pb-10 lg:pb-40 gap-10 text-center lg:text-start">
        <span className="text-midnightGreen text-[16px] bg-[#F4F6F7] p-2 w-[153px] rounded-md text-center font-bold">
          WORK HOURS
        </span>
        <h2>When Are We Open </h2>
        <div className="flex flex-col lg:flex-row lg:relative gap-10 lg:gap-0 lg:px-[300px]">
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start px-8 py-2 lg:py-10 gap-8 rounded-3xl bg-midnightGreen lg:w-[456px] lg:h-[404px] lg:absolute lg:top-[45%] lg:left-0">
            <h5 className="text-white text-[48px] font-medium font-['DM_Sans']">
              Appointment
            </h5>
            <p className="text-[24px] font-semibold text-white font-['Quicksand'] lg:w-[342px]">
              Medical technologies to provide appropriate care and improve
              patient outcomes.
            </p>
            <div>
              <button className="uppercase rounded-3xl px-8 py-3 bg-white text-black hover:bg-[#328495] hover:text-white transition-[0.25s]">
                book now
              </button>
            </div>
          </div>
          <img src={image} className="w-full h-full" alt="" />
          <div className="flex flex-col justify-center p-5 bg-[#E8EDEC] rounded-3xl gap-8 lg:w-[456px] lg:h-[404px] lg:absolute lg:top-[10%] lg:right-0">
            <h4 className="text-black">Open Hours</h4>
            <p className="body-2 lg:w-[380px]">
              Note that hours of operation may differ during public holidays.
            </p>
            <ul>
              <li className="before:content-[''] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-black relative ps-5">
                <p className="text-[24px] font-semibold text-black font-['Quicksand'] ">
                  Mon,Wed,Thr: 10AM - 4PM
                </p>
              </li>
              <li className="before:content-[''] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-black relative ps-5">
                <p className="text-[24px] font-semibold text-black font-['Quicksand'] ">
                  Tuesday: Closed
                </p>
              </li>
              <li className="before:content-[''] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-black relative ps-5">
                <p className="text-[24px] font-semibold text-black font-['Quicksand'] ">
                  Friday: On Call
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WorkHours;

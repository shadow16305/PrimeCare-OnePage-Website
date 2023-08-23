import React, { Fragment } from "react";

import doctor_img from "../../assets/headerDoc.png";

import "./Ticker.css";

const Header = () => {
  return (
    <Fragment>
      <div className="container lg:max-w-[1728px] lg:ps-[96px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-center lg:gap-64">
          <div className="flex flex-col gap-10 py-20 text-center lg:text-start">
            <h1 className="lg:max-w-[598px]">Prime Care Walk-in Clinic</h1>
            <p className="body-1 lg:max-w-[598px]">
              We are a multimodality imaging clinic and have been operating for
              many years. Our staff is caring and highly qualified. Our goal is
              to provide timely and high quality imaging exams to our patients.
            </p>
            <div>
              <button className="uppercase text-white bg-midnightGreen px-6 py-3 rounded-3xl text-xl hover:bg-[#328495] transition-[0.25s]">
                get appointment
              </button>
            </div>
          </div>
          <div>
            <img src={doctor_img} className="max-h-[700px]" alt="" />
          </div>
        </div>
      </div>
      <div className="hwrap">
        <div className="flex flex-row bg-midnightGreen hmove">
          <div className="flex items-center gap-8 hitem">
            <div className="dot"></div>
            <h4>HAPPY PATIENTS </h4>
            <div className="dot"></div>
            <h4>ULTRASOUND SERVICES</h4>
            <div className="dot"></div>
            <h4>CARDIAC SERVICES</h4>
            <div className="dot"></div>
            <h4>X-RAY SERVICES</h4>
          </div>
          <div className="flex items-center gap-8 hitem">
            <div className="dot"></div>
            <h4>HAPPY PATIENTS </h4>
            <div className="dot"></div>
            <h4>ULTRASOUND SERVICES</h4>
            <div className="dot"></div>
            <h4>CARDIAC SERVICES</h4>
            <div className="dot"></div>
            <h4>X-RAY SERVICES</h4>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
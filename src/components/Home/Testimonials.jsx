import React, { Fragment } from "react";

import quote_icon from "../../assets/quote-icon.svg";
import person_icon_one from "../../assets/person_icon.svg";
import person_icon_two from "../../assets/person_icon_two.svg";

const Testimonials = () => {
  return (
    <Fragment>
      <div className="container mx-auto flex flex-col items-center gap-10 py-12">
        <span className="text-midnightGreen text-[16px] bg-[#F4F6F7] p-2 w-[202px] rounded-md text-center font-bold">
          TOUGHT OF PATIENTS
        </span>
        <h2 className="lg:max-w-[753px] text-center">
          Here’s What Our Customers Have Said
        </h2>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col gap-4 bg-[#E8EDEC] lg:w-[600px] lg:h-[384px] p-2">
            <img src={quote_icon} className="w-[80px] h-[80px]" alt="" />
            <p className="px-4">
              It’s important to note that medical desicions should be based on
              scientific evidence, professional medical advice , and
              consultation with healthcare providers.While testimonials can
              provide insights into individual experiences.
            </p>
            <div className="flex flex-col lg:flex-row justify-center gap-3">
              <img src={person_icon_one} alt="" />
              <div className="flex flex-col justify-center">
                <h3 className="text-[28px]">Nik Morgan, Inc</h3>
                <p className="text-2xl text-midnightGreen">Toronto,ON</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-[#E8EDEC] lg:w-[600px] lg:h-[384px] p-2">
            <img src={quote_icon} alt="" className="w-[80px] h-[80px]" />
            <p className="px-4">
              It’s important to note that medical desicions should be based on
              scientific evidence, professional medical advice , and
              consultation with healthcare providers.While testimonials can
              provide insights into individual experiences.
            </p>
            <div className="flex flex-col lg:flex-row justify-center gap-3">
              <img src={person_icon_two} alt="" />
              <div className="flex flex-col justify-center">
                <h3 className="text-[28px]">Nik Morgan, Inc</h3>
                <p className="text-2xl text-midnightGreen">Toronto,ON</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonials;

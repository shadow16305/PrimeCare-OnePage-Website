import React, { Fragment } from "react";

import phone_icon from "../../assets/phone-icon.svg";
import mail_icon from "../../assets/mail-icon.svg";
import location_icon from "../../assets/location-icon.svg";

import Map from "./Map";
import "./Ticker.css";

const Contact = () => {
  return (
    <Fragment>
      <div className="container mx-auto flex flex-col items-center gap-20 py-12">
        <div className="flex flex-col items-center justify-center lg:w-[1240px] lg:h-[400px] bg-midnightGreen lg:rounded-[60px] py-6 lg:py-0 gap-4">
          <h1 className="text-white">Contact Us</h1>
          <p className="text-white text-2xl font-['Quicksand'] lg:max-w-[723px] text-center">
            It is a broead discipline thar includes various branches and
            specialties aimed at promoting health and well-being.
          </p>
        </div>
        <div
          className="flex flex-col-reverse lg:flex-row lg:justify-center gap-20"
          id="contact"
        >
          <div>
            <Map />
          </div>
          <div className="flex flex-col px-4 lg:px-0 gap-4">
            <span className="text-midnightGreen text-base bg-[#F4F6F7] p-2 w-[142px] rounded-md text-center font-bold">
              Contact Us
            </span>
            <h2>Get in touch</h2>
            <p className="max-w-[342px] lg:max-w-[580px]">
              Medical, or medicine, refers to the field of healthcare that
              encompasses the diagnosis, treatment, and prevention of diseases
              and injuries in humans. It is a broad discipline that includes
              various branches.
            </p>
            <div className="flex flex-row gap-3">
              <img src={phone_icon} className="w-[48px] h-[48px]" alt="" />
              <div className="flex flex-col justify-center">
                <h3>Call us</h3>
                <p className="text-base">(416) 997 - 5559</p>
                <p className="text-base">(365) 509 - 2982</p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <img src={mail_icon} className="w-[48px] h-[48px]" alt="" />
              <div className="flex flex-col justify-center">
                <h3>Mail us</h3>
                <p className="text-base">info@primecareclinic.ca</p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <img src={location_icon} className="w-[48px] h-[48px]" alt="" />
              <div className="flex flex-col justify-center">
                <h3>Our location</h3>
                <p className="text-base lg:max-w-[384px]">
                  9160 Bayview Ave, Unit b01, Richmond Hill, ON L4B 0E6
                </p>
              </div>
            </div>
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

export default Contact;

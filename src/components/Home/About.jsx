import React, { Fragment } from "react";
import about_img from "../../assets/PICTURE OF DOCTOR.png";

const About = () => {
  return (
    <Fragment>
      <div className="bg-[url('/src/assets/about-bg.png')] bg-cover bg-no-repeat">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-center py-20 gap-40">
          <img src={about_img} alt="" />
          <div className="flex flex-col justify-center items-center lg:items-start gap-5 text-center lg:text-start">
            <span className="text-midnightGreen text-[18px] bg-[#F4F6F7] p-2 w-[115px] rounded-md text-center font-bold">
              ABOUT US
            </span>
            <h2 className="lg:max-w-[430px]">Experts in Medical Services</h2>
            <p className="lg:max-w-[548px]">
              Welcome to Bayview Diagnostic Centre! We are a leading imaging
              clinic, dedicated to exceptional care. Our caring, qualified team
              delivers timely, high-quality exams for accurate diagnoses.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="before:content-[''] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-midnightGreen relative ps-5">
                <h3>20+ Years Of Excellence</h3>
              </li>
              <li className="before:content-[''] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-midnightGreen relative ps-5">
                <h3>Multi Speciality Hospital</h3>
              </li>
              <li className="before:content-[''] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-midnightGreen relative ps-5">
                <h3>Operation & Appointment</h3>
              </li>
              <li className="before:content-[''] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-midnightGreen relative ps-5">
                <h3>Professional Experts</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;

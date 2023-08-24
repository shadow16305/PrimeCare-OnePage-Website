import React, { Fragment } from "react";
import Accordion from "./Accordion";
import icon_one from "../../assets/Frame 33.svg";
import icon_two from "../../assets/heart.svg";
import icon_three from "../../assets/Frame 40.svg";
import icon_four from "../../assets/Frame 41.svg";

const items = [
  {
    title: "Vascular Surgeon Consultation",
    icon: icon_one,
    content:
      "Our staff is highly trained and dedicated to providing exceptional patient care, listening to your needs and guiding you throughout the process.",
  },
  {
    title: "Family Doctor Services",
    icon: icon_two,
    content:
      "Our staff is highly trained and dedicated to providing exceptional patient care, listening to your needs and guiding you throughout the process.",
  },
  {
    title: "Gynecology",
    icon: icon_three,
    content:
      "Our staff is highly trained and dedicated to providing exceptional patient care, listening to your needs and guiding you throughout the process.",
  },
  {
    title: "Varicose Veins Treatment",
    icon: icon_four,
    content:
      "Our staff is highly trained and dedicated to providing exceptional patient care, listening to your needs and guiding you throughout the process.",
  },
];

const Facilities = () => {
  return (
    <Fragment>
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-center gap-12 py-12">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-6 lg:gap-10 justify-center">
          <span className="text-midnightGreen text-[16px] bg-[#F4F6F7] p-2 w-[200px] rounded-md text-center font-bold">
            FACILITIES WE HAVE
          </span>
          <h2 className="max-w-[260px] lg:max-w-[483px]">
            What Exactly Facilities We Provide
          </h2>
          <p className="max-w-[300px] lg:max-w-[483px]">
            It is a broad discipline that includes various branches and
            specialties aimed at promoting health and well-being.
          </p>
          <div className="mt-4 lg:mt-0">
            <a
              href="#contact"
              className="px-6 py-3 bg-midnightGreen text-white text-xl font-['DM_Sans'] rounded-3xl hover:bg-[#328495] transition-[0.25s]"
            >
              CALL US
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <Accordion items={items} />
        </div>
      </div>
    </Fragment>
  );
};

export default Facilities;

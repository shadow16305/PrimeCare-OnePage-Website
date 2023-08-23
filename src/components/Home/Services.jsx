import React, { Fragment } from "react";
import icon_one from "../../assets/doctor_female.svg";
import icon_two from "../../assets/heart.svg";
import icon_three from "../../assets/human.svg";
import icon_four from "../../assets/ultrasound (3) 1.svg";

const cards = [
  {
    id: 0,
    icon: icon_one,
    text: "Consultation",
  },
  {
    id: 1,
    icon: icon_two,
    text: "Family Doctor Services",
  },
  {
    id: 2,
    icon: icon_three,
    text: "Gynecology",
  },
  {
    id: 3,
    icon: icon_four,
    text: "Varicose Veins Treatment",
  },
];

const Services = () => {
  return (
    <Fragment>
      <div className="flex flex-col items-center gap-10 py-12">
        <span className="text-midnightGreen text-[16px] bg-[#F4F6F7] p-2 w-[173px] rounded-md text-center font-bold">
          OUR SERVICES
        </span>
        <h2 className="text-center lg:max-w-[714px]">
          Best Medical Services Prime Care Clinic
        </h2>
        <div className="py-20 bg-[#006C7215] w-full flex flex-col items-center gap-12">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 ">
            {cards.map((elem) => (
              <div
                className="flex flex-col items-center justify-center bg-white py-20 gap-3 w-[248px] h-[248px] rounded-3xl"
                key={elem.id}
              >
                <img src={elem.icon} alt="" className="w-[100px] h-[100px]" />
                <h3 className="text-center">{elem.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Services;

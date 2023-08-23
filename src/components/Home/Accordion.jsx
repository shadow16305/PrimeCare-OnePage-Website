import React, { Fragment } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ items }) {
  return (
    <div className="flex flex-col gap-5 bg-[#006C7215] p-2 rounded-lg">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          icon={item.icon}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default Accordion;

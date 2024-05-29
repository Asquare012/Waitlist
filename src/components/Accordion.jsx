import { useState } from "react";
import FAQdata from "./FAQdata";
import open from "../images/open.png";
import close from "../images/close.png";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ol>
      {FAQdata.map((item, index) => {
        return (
          <li key={index}>
            <span className="Question" onClick={() => toggleAccordion(index)}>
              {item.question}
              <img src={open} alt="open" height="35px" />
            </span>
            {activeIndex === index && (
              <span className="Answer">
                <span>
                  {item.question} <img src={close} alt="close" height="35px" />
                </span>
                {item.answer}
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default Accordion;

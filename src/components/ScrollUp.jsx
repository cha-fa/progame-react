import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "style/components.scss";

const ScrollUp = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="ScrollUp">
      <FaArrowCircleUp onClick={handleClick} size={50} />
    </div>
  );
};

export default ScrollUp;

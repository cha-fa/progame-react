import React from "react";
import { BsPlayFill } from "react-icons/bs";

const Jumbotron = ({ image, website }) => {
  console.log("IN JUMBOTRON", image, website);
  return (
    <div className="Jumbotron">
      <div
        className="jumbotron jumbotron-fluid"
        style={{ backgroundImage: "url(" + image + ")" }}
      >
        <a target="_blank" rel="noreferrer" href={website}>
          <div className="play-btn d-flex justify-content-between">
            View website
            <BsPlayFill size={30} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;

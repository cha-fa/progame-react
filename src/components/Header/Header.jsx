import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav className="mb-5 d-flex justify-content-between align-items-center d-flex row">
        <a className="no-style" href="#">
          <h2>The Hyper Progame</h2>
        </a>
        <form data-aos="zoom-in" className="form-inline ">
          <FaSearch />
          <input
            id="userSearch"
            type="search"
            placeholder="Find a game"
            aria-label="Search"
          />
          <button className="pl-3" type="submit" id="submitBtn">
            Find a game
          </button>
        </form>
      </nav>

      <div className="introduction mb-5">
        <h2 className="mb-5">Welcome,</h2>

        <p>
          The Hyper Progame is the world’s premier event for computer and video
          games and related products. At The Hyper Progame, the video game
          industry’s top talent pack the Los Angeles Convention Center,
          connecting tens of thousands of the best, brightest, and most
          innovative in the interactive entertainment industry. For three
          exciting days, leading-edge companies, groundbreaking new
          technologies, and never-before-seen products will be showcased. The
          Hyper Progame connects you with both new and existing partners,
          industry executives, gamers, and social influencers providing
          unprecedented exposure.
        </p>

        <div className="select-platform">
          <select id="selectPlatform">
            <option selected value="">
              Platform : Any{" "}
            </option>
          </select>
          <i className="fas fa-caret-down"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;

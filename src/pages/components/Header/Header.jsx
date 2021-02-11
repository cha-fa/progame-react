import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = ({ handleSearchInput }) => {
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
            onChange={(event) => handleSearchInput(event.target.value)}
          />
          <button className="pl-3" type="submit" id="submitBtn">
            Find a game
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;

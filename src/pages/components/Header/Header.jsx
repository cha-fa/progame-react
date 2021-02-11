import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, Redirect } from "react-router-dom";

const Header = ({ handleSearchInput }) => {
  const handleClick = (event) => {
    console.log("event lauched");
    event.preventDefault();
    handleSearchInput(document.getElementById("userSearch").value);
  };
  return (
    <header>
      <nav className="mb-5 d-flex justify-content-between align-items-center d-flex row">
        <Link className="o-style" to="/">
          <h2>The Hyper Progame</h2>
        </Link>
        <form data-aos="zoom-in" className="form-inline ">
          <FaSearch />
          <input
            id="userSearch"
            type="search"
            placeholder="Find a game"
            aria-label="Search"
          />
          <button
            className="pl-3"
            type="submit"
            id="submitBtn"
            onClick={handleClick}
          >
            Find a game
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;

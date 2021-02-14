import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

const Header = ({ handleSearchInput }) => {
  let history = useHistory();
  const inputRef = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    history.push("/");
    handleSearchInput(inputRef.current.value);
  };

  return (
    <header>
      <nav className="mb-5 d-flex justify-content-between align-items-center d-flex row">
        <Link className="o-style" to="/">
          <h2>The Hyper Progame</h2>
        </Link>
        <form data-aos="zoom-in" className="form-inline ">
          <FaSearch size={30} color="white" className="m-3" />
          <input
            ref={inputRef}
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

import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useHistory, useLocation } from "react-router-dom";
import { MdClear } from "react-icons/md";
import "style/header.scss";

const Header = ({ handleSearchInput }) => {
  let history = useHistory();
  const inputRef = useRef();
  const [ongoingSearch, setOngoingSearch] = useState(false);
  const location = useLocation();
  const handleClick = (event) => {
    event.preventDefault();
    history.push("/");
    handleSearchInput(inputRef.current.value);
    setOngoingSearch(true);
  };

  const clearSearch = () => {
    handleSearchInput(undefined);
    inputRef.current.value = "";
    setOngoingSearch(false);
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      clearSearch();
    }
  }, [location.pathname]);

  return (
    <header>
      <nav className="mb-5 d-flex justify-content-between align-items-center d-flex row">
        <Link className="no-style" to="/">
          <h1 onClick={clearSearch}>GameFinder</h1>
        </Link>

        <form
          data-aos="zoom-in"
          className="form-inline "
          onSubmit={handleClick}
        >
          <input
            ref={inputRef}
            type="search"
            placeholder="Find a game"
            aria-label="Search"
          />
          {(ongoingSearch && (
            <MdClear
              className="SearchSubmit"
              type="button"
              size={30}
              color="white"
              onClick={clearSearch}
            />
          )) || (
            <FaSearch
              className="SearchSubmit"
              type="submit"
              size={30}
              color="white"
              onClick={handleClick}
            />
          )}
        </form>
      </nav>
    </header>
  );
};

export default Header;

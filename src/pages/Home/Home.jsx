import React from "react";
import Introduction from "pages/Home/components/Introduction";
import SearchResults from "pages/Home/components/SearchResults";

const Home = ({ searchKeyword }) => {
  return (
    <div>
      <Introduction />
      <SearchResults searchKeyword={searchKeyword} />
    </div>
  );
};

export default Home;

import React from "react";
import Introduction from "pages/Home/components/Introduction";
import SearchResults from "pages/Home/components/SearchResults";

const Home = ({ searchKeyword }) => {
  return (
    <div>
      <h1>Welcome home</h1>
      <Introduction />
      <h2>search keyword : {searchKeyword}</h2>
      <SearchResults searchKeyword={searchKeyword} />
    </div>
  );
};

export default Home;

import { useState } from "react";
import Introduction from "pages/Home/components/Introduction";
import SearchResults from "pages/Home/components/SearchResults";
import Filtering from "./components/Filtering";

const Home = ({ searchKeyword }) => {
  const [currentFilter, setCurrentFilter] = useState({ sort: "-relevance" });

  const handleFiltering = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <div>
      <Introduction />
      <Filtering handleFiltering={handleFiltering} />
      <SearchResults searchKeyword={searchKeyword} filter={currentFilter} />
    </div>
  );
};

export default Home;

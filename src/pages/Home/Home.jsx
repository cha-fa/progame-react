import { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResults from "pages/Home/components/SearchResults";
import Filtering from "pages/Home/components/Filtering";

const Home = ({ searchKeyword }) => {
  const location = useLocation();
  const [currentFilter, setCurrentFilter] = useState({ sort: "-relevance" });

  const handleFiltering = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <div>
      <Filtering handleFiltering={handleFiltering} query={location.state} />
      <SearchResults
        searchKeyword={searchKeyword}
        filter={currentFilter}
        query={location.search}
      />
    </div>
  );
};

export default Home;

import { useState } from "react";
import { useLocation } from "react-router-dom";
import Introduction from "pages/Home/components/Introduction";
import SearchResults from "pages/Home/components/SearchResults";
import Filtering from "./components/Filtering";

const Home = ({ searchKeyword }) => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();

  const [currentFilter, setCurrentFilter] = useState({ sort: "-relevance" });

  const handleFiltering = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <div>
      <Introduction />
      <Filtering handleFiltering={handleFiltering} />
      <SearchResults
        searchKeyword={searchKeyword}
        filter={currentFilter}
        query={{ developers: query.get("developers") }}
      />
    </div>
  );
};

export default Home;

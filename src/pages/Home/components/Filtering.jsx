import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./filtering.scss";

const Filtering = ({ handleFiltering, query }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [currentPlatforms, setCurrentPlatforms] = useState();
  const sort = useRef();
  const platform = useRef();
  const defaultSort = "-relevance";
  const defaultPlatform = "1,2,3,4,5,6,7,8,14";
  const history = useHistory();

  const handleChange = () => {
    handleFiltering({
      sort: sort.current.value,
      platform: platform.current.value,
    });
    history.push("/");
  };

  const handleClick = () => {
    sort.current.value = defaultSort;
    platform.current.value = defaultPlatform;
    handleFiltering({
      sort: defaultSort,
      platform: defaultPlatform,
    });
    history.push("/");
  };

  const fetchPlatforms = () => {
    const ids = [9, 10, 11, 12, 13];
    fetch(`${API_URL}/platforms/lists/parents`)
      .then((response) => response.json())
      .then((response) => {
        const platforms = response.results.filter(
          (result) => !ids.includes(result.id)
        );
        setCurrentPlatforms(platforms);
      });
  };
  useEffect(() => {
    fetchPlatforms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Filtering">
      <h2 className="mb-5">Discover your next favorite game!</h2>
      <select
        name="filtering"
        ref={sort}
        defaultValue={{ value: defaultSort, label: "Relevance" }}
        onChange={handleChange}
      >
        <option value={defaultSort}>Relevance</option>
        <option value="-created">Date added</option>
        <option value="name">Name</option>
        <option value="-added">Popularity</option>
        <option value="-rating">Average Rating</option>
        <option value="-released">Release Date</option>
      </select>
      <select
        id="platforms"
        name="platforms"
        ref={platform}
        onChange={handleChange}
        defaultValue={{ value: defaultPlatform, label: "All" }}
      >
        <option value={defaultPlatform}>All</option>
        {currentPlatforms &&
          currentPlatforms.map((platform) => (
            <option key={platform.id} value={platform.id}>
              {platform.name}
            </option>
          ))}
      </select>

      {((sort.current && sort.current.value !== defaultSort) ||
        query ||
        (platform.current && platform.current.value !== defaultPlatform)) && (
        <p onClick={handleClick}>Clear filters</p>
      )}
      <h6>{query && `Filtering by ${query.type}: ${query.name}`}</h6>
    </div>
  );
};

export default Filtering;

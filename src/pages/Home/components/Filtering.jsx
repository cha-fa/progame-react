import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Filtering = ({ handleFiltering }) => {
  const [currentPlatforms, setCurrentPlatforms] = useState();
  const sort = useRef();
  const platform = useRef();
  let history = useHistory();

  const handleChange = () => {
    handleFiltering({
      sort: sort.current.value,
      platform: platform.current.value,
    });
    history.push("/");
  };

  const handleClick = () => {
    handleFiltering({
      sort: "-relevance",
      platform: "1,2,3,4,5,6,7,8,14",
    });
    history.push("/");
  };

  const fetchPlatforms = () => {
    const ids = [9, 10, 11, 12, 13];
    fetch("https://api.rawg.io/api/platforms/lists/parents")
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
      <select
        id="filtering"
        name="filtering"
        ref={sort}
        defaultValue={{ value: "-relevance", label: "Relevance" }}
        onChange={handleChange}
      >
        <option value="-relevance">Relevance</option>
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
        defaultValue={{ value: "1,2,3,4,5,6,7,8,14", label: "All" }}
      >
        <option key={platform.id} value="1,2,3,4,5,6,7,8,14">
          All
        </option>
        {currentPlatforms &&
          currentPlatforms.map((platform) => (
            <option key={platform.id} value={platform.id}>
              {platform.name}
            </option>
          ))}
      </select>
      <button type="button" onClick={handleClick}>
        CLEAR ALL FILTERS
      </button>
    </div>
  );
};

export default Filtering;

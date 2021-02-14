import { useRef, useState, useEffect } from "react";

const Filtering = ({ handleFiltering }) => {
  const [currentPlatforms, setCurrentPlatforms] = useState();
  const sort = useRef();
  const platform = useRef();

  const handleChange = () => {
    handleFiltering({
      sort: sort.current.value,
      platform: platform.current.value,
    });
  };

  const fetchPlatforms = () => {
    fetch("https://api.rawg.io/api/platforms/lists/parents")
      .then((response) => response.json())
      .then((response) => {
        setCurrentPlatforms(response.results);
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
      >
        <option key={platform.id} value="null">
          All
        </option>
        {currentPlatforms &&
          currentPlatforms.map((platform) => (
            <option key={platform.id} value={platform.id}>
              {platform.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Filtering;

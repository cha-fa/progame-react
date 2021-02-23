import { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./filtering.scss";
import useFetch from "hooks/useFetch";

const Filtering = ({ handleFiltering, query }) => {
  const sort = useRef();
  const platform = useRef();
  const defaultSort = "-relevance";
  let defaultPlatforms = "1,2,3,4,5,6,7,8,14";
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
    platform.current.value = defaultPlatforms;
    handleFiltering({
      sort: defaultSort,
      platform: defaultPlatforms,
    });
    history.push("/");
  };

  const { data, get } = useFetch();

  useEffect(() => {
    get(`/platforms/lists/parents`);
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
        defaultValue={{ value: defaultPlatforms, label: "All" }}
      >
        <option value={defaultPlatforms}>All</option>
        {data &&
          data.results
            .filter((plat) =>
              defaultPlatforms.split(",").includes(plat.id.toString())
            )
            .map((platform) => (
              <option key={platform.id} value={platform.id}>
                {platform.name}
              </option>
            ))}
      </select>

      {((sort.current && sort.current.value !== defaultSort) ||
        query ||
        (platform.current && platform.current.value !== defaultPlatforms)) && (
        <p onClick={handleClick}>Clear filters</p>
      )}
      <h6>{query && `Filtering by ${query.type}: ${query.name}`}</h6>
    </div>
  );
};

export default Filtering;

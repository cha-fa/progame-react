import { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./filtering.scss";
import useFetch from "hooks/useFetch";
import { BsTrash } from "react-icons/bs";

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
      <form>
        <div class="form-row">
          <div className="form-group">
            <label for="filtering">Sort by:</label>
            <select
              className="form-control"
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
          </div>
          <div className="form-group">
            <label for="platforms">Platforms:</label>
            <select
              className="form-control"
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
          </div>

          <div className="d-flex align-items-end">
            {((sort.current && sort.current.value !== defaultSort) ||
              query ||
              (platform.current &&
                platform.current.value !== defaultPlatforms)) && (
              <div className="clearFilters" onClick={handleClick}>
                <BsTrash size={20} />
                Clear filters
              </div>
            )}
          </div>
        </div>
      </form>
      <div>
        <h6>{query && `Filtering by ${query.type}: ${query.name}`}</h6>
      </div>
    </div>
  );
};

export default Filtering;

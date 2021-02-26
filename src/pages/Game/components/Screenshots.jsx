import { useEffect } from "react";
import useFetch from "hooks/useFetch";
import Loading from "components/Loading";

const Screenshots = ({ gameSlug }) => {
  const { data, error, isLoading, get } = useFetch();

  useEffect(() => {
    get(`/games/${gameSlug}/screenshots?page_size=4`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div data-aos="fade-up" className="Screenshots row">
      {isLoading && <Loading />}
      {error && <h4>{error}</h4>}
      {data && (
        <div className="col">
          <h2>SCREENSHOTS</h2>
          <div
            data-aos="fade-up"
            className="row d-flex justify-content-center"
            id="screenshots"
          >
            {data.results.map((screenshot) => (
              <img
                src={screenshot.image}
                alt="Snapshot of the game"
                key={screenshot.id}
              ></img>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Screenshots;

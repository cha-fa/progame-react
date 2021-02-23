import { useState } from "react";

const useFetch = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState(null);
  const [error, setError] = useState(null);
  const [nextData, setNextData] = useState(null);

  const get = (path, next = false, previousResults) => {
    setIsLoading(true);
    setError(null);
    setNextData(previousResults ? previousResults : []);
    if (!next) {
      path = `${API_URL}${path}`;
    }
    fetch(path)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setError("Une erreur est survenue");
        }
      })
      .then((response) => {
        setData(response);
        setNextUrl(response.next);
        setIsLoading(false);
        if (next) {
          setNextData((nextData) => nextData.concat(response.results));
        }
        console.log("fetching ", path);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    data,
    error,
    isLoading,
    get,
    nextUrl,
    nextData,
  };
};
export default useFetch;

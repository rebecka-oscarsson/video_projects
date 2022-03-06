import { useState, useEffect } from "react";

const useFetch = (searchTerm) => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => { 
      setLoading(true);
      fetch(
        `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${searchTerm}&limit=3`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.pages);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
  }, [searchTerm]);

  return [searchResults, loading, error];
};

export default useFetch;

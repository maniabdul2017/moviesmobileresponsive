import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Movies from "./Movies";
const url = "https://run.mocky.io/v3/71f37677-a483-4dbe-9f19-c0cf9843b080";
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const movies = await response.json();
      setLoading(false);
      setMovies(movies);
      console.log(movies);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Movies movies={movies} />
    </main>
  );
}

export default App;

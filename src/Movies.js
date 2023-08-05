import React from "react";
import Movie from "./Movie";
const Movies = ({ movies }) => {
  return (
    <section>
      <div className="title">
        <h2>Avengers Movies</h2>
        <div className="underline"></div>
      </div>
      <div>
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie}></Movie>;
        })}
      </div>
    </section>
  );
};

export default Movies;

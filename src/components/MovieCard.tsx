const MovieCard = ({ data }: { data: any }) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />

      <div className="mt-4">
        <h3>{data.title}</h3>
        <div className="content">
          <div className="rating">
            <img src="yellow-star.svg" />
            <p>{data.vote_average.toFixed(1)}</p>
          </div>
          <span>.</span>
          <p className="lang">{data.original_language}</p>
          <span>.</span>
          <p className="year">{data.release_date.split("-")[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
/*{data.title} {data.
vote_average
}  ----- {
data.original_language
}   ----{data.release_date
}  ---- {data.poster_path
}
https://image.tmbd.org/t/p/w500
*/

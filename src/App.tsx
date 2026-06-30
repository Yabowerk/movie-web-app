import React, { useState } from "react";
import { useEffect } from "react";
import Search from "./components/Search.jsx";
import MovieCard from "./components/MovieCard.jsx";
import { useDebounce } from "react-use";
//import { updatesearch } from "./appwrite.js";
const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
console.log(apiKey);
const BASEURL = "https://api.themoviedb.org/3/";
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};
const App = () => {
  const [searchtext, setsearchtext] = useState("");
  const [showerror, setshowerror] = useState("");
  const [movielist, setmovielist] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useDebounce(
    () => {
      setDebouncedSearch(searchtext);
    },
    500,
    [searchtext],
  );
  const fetchData = async (query = "") => {
    setisLoading(true);
    try {
      //throw new Error("Testing catc block");
      const endpoint = query
        ? `${BASEURL}search/movie?query=${encodeURIComponent(query)}`
        : `${BASEURL}discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
        setmovielist([]);
        return;
      }
      setmovielist(data.results);
      if (query && data.results.length > 0) {
        await updatesearch(query, data.results[0]);
      }
      //console.log(data.results); //i see the movie list
      //console.log(movielist); //i dont see the movie list why????
    } catch (error) {
      console.log("error is happened");
      setshowerror("error happened try again");
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    fetchData(debouncedSearch);
  }, [debouncedSearch]);

  /*useEffect(() => {
    console.log(movielist);
  }, [movielist]);*/
  return (
    <main>
      <div className="patter" />
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="hero banner" />
          <h1>
            THIS IS THE <span className="text-gradient">HEADING</span> PART OF
            THE WEBSITE
          </h1>
          <Search searchtext={searchtext} setsearchtext={setsearchtext} />
        </header>

        <section className="all-movies">
          <h2 className="mt-[200px]">all movies</h2>
          {isLoading ? (
            <p className="white-text">loading...</p>
          ) : showerror ? (
            <p className="text-red-500">{showerror}</p>
          ) : (
            <ul>
              {movielist.map((movie) => (
                /*<p key={movie.id} className="text-white">
                  {movie.title}
                </p>*/
                <MovieCard key={movie.id} data={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};
export default App;

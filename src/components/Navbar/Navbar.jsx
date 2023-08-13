import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useMovie } from "../../contexts/Moviecontext";

export const Navbar = () => {
    const [searchText, setSearchText] = useState("");
    const { searchedMovies, findMovie, resetSearch } = useMovie();
    const handleChange = (e) => {
        setSearchText(e.target.value);
        findMovie(e.target.value);
    };
    useEffect(() => {
        resetSearch();
    }, [])
    
    return (
       
            <nav>
                <h1>IMDB</h1>

                <input
                    type="search"
                    placeholder="search movies by title, cast and director"
                    className="search-field"
                    value={searchText}
                    onChange={handleChange}
                />
                <div className="search-results">
                {searchedMovies.map((movie) => (
                    <Link
                        key={movie.id}
                        to={`/movie/${movie.id}`}
                        className="search-item"
                    >
                        <img
                            src={movie.imageURL}
                            className="search-item-image"
                        />
                        <p>{movie.title}</p>
                    </Link>
                ))}
            </div>

                <div className="links">
                    <Link to="/">Movies</Link>
                    <Link to="/watchlist">WatchList</Link>
                    <Link to="/starred">Starred Movies</Link>
                </div>
            </nav>
            
        
    );
};

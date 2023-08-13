import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { useMovie } from "../contexts/Moviecontext";
import "../App.css";
import { Moviecard } from "../components/Moviecard/Moviecard";
import { Link } from "react-router-dom";

export const Home = () => {
    const {
        movies,
        genre,
        changeGenre,
        displayMovies,
        rating,
        changeRating,
        changeYear,
        releaseYear
    } = useMovie();
    const genres = movies.reduce((acc, val) => {
        const currMovieGenres = val.genre;
        currMovieGenres.forEach((genre) => {
            if (!acc[genre]) acc[genre] = genre;
        });
        return acc;
    }, {});
    const updatedGenres = ["All", ...Object.keys(genres)];
    let releaseYears = ["Release Year"];
    for (let i = 1990; i <= 2023; i++) {
        releaseYears.push(i);
    }
    let ratings = ["Rating"];
    for (let i = 1; i <= 10; i++) {
        ratings.push(i);
    }

    function handleGenre(event) {
        changeGenre(event.target.value);
    }

    function handleRating(event) {
        changeRating(event.target.value);
    }

    function handleReleaseYear(event) {
        changeYear(event.target.value);
    }

    return (
        <div>
            <Navbar />
            <div className="home-content">
                <div className="filters">
                    <h2>Movies</h2>
                    <select value={genre} onChange={handleGenre}>
                        {updatedGenres.map((genre, index) => (
                            <option key={index}>{genre}</option>
                        ))}
                    </select>
                    <select value={releaseYear} onChange={handleReleaseYear}>
                        {releaseYears.map((year, index) => (
                            <option key={index}>{year}</option>
                        ))}
                    </select>
                    <select value={rating} onChange={handleRating}>
                        {ratings.map((rating, index) => (
                            <option key={index}>{rating}</option>
                        ))}
                    </select>
                    <Link to="/addMovie"><button className="add-btn">Add a movie</button></Link>
                </div>
                <div className="movies">
                    {displayMovies.length > 0 ? (
                        displayMovies.map((movie) => (
                            <Moviecard key={movie.id} {...movie} />
                        ))
                    ) : (
                        <p>
                            <strong>No movies found! Change Filters</strong>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

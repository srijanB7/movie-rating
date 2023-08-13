import React from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../contexts/Moviecontext";
import { Navbar } from "../components/Navbar/Navbar";
import "../App.css";

export const SingleMovie = () => {
    const { id } = useParams();
    const { movies, } = useMovie();
    const movie = movies.find((movie) => movie.id == id);

    return (
        <div className="single-movie-card">
            <Navbar />
            <div className="single-movie-content">
                <img
                    src={movie.imageURL}
                    alt="movie"
                    className="single-movie-img"
                />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <p>{movie.summary}</p>
                    <p>Year: {movie.year}</p>
                    <p>
                        Genre:
                        {movie.genre.join(", ")}
                    </p>
                    <p>Director: {movie.director}</p>
                    <p>Writer: {movie.writer}</p>
                    <p>Cast: {movie.cast.join(", ")}</p>
                    <div className="action-btns">
                        <button>Star</button>
                        <button>Add to Watchlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

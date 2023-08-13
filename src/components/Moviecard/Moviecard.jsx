import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Moviecard.css";
import { useMovie } from "../../contexts/Moviecontext";

export const Moviecard = ({ id, title, imageURL, summary }) => {
    const { movies, handleStar } = useMovie();
    const isStarred = movies.find((movie) => movie.id === id).star;

    return (
        <div className="movie-card">
            <Link to={`/movie/${id}`} className="link-movie">
                <img src={imageURL} alt="movie" />
                <h3>{title}</h3>
                <p>{summary}</p>
            </Link>
            <div className="btns">
                <button
                    onClick={() => {
                        handleStar(isStarred, id);
                    }}
                >
                    {isStarred ? "Unstar" : "Star"}
                </button>
                <button>Add to watchlist</button>
            </div>
        </div>
    );
};

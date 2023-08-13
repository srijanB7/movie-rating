import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { useMovie } from "../contexts/Moviecontext";
import { Moviecard } from "../components/Moviecard/Moviecard";
import "../App.css";

export const Starred = () => {
    const { movies } = useMovie();
    const starredMovies = movies.filter((movie) => movie.star);
    return (
        <div>
            <Navbar />
            <div className="starred-content">
                {   starredMovies.length > 0 ?
                starredMovies.map((movie) => (
                    <Moviecard key={movie.id} {...movie} />
                )) : <p>No Starred movies!</p>}
            </div>
        </div>
    );
};

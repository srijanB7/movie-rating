import { createContext, useContext, useReducer } from "react";
import { Initial_State, dataReducer } from "../reducers/dataReducer";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, Initial_State);
    const { movies, searchedMovies, rating, releaseYear, genre } = state;
    let displayMovies = [...movies];
    if (state.genre !== "All") {
        displayMovies = displayMovies.filter((movie) =>
            movie.genre.includes(state.genre)
        );
    }
    if (state.rating !== "Rating") {
        displayMovies = displayMovies.filter(
            (movie) => movie.rating === parseInt(state.rating)
        );
    }

    if (state.releaseYear !== "Release Year") {
        displayMovies = displayMovies.filter(
            (movie) => movie.year === parseInt(state.releaseYear)
        );
    }
    function changeGenre(genre) {
        dispatch({ type: "change genre", payload: genre });
    }

    function changeRating(rating) {
        dispatch({ type: "change rating", payload: rating });
    }

    function changeYear(year) {
        dispatch({ type: "change year", payload: year });
    }

    function handleStar(isStarred, id) {
        dispatch({ type: "change star", payload: {star: !isStarred, id} });
    }

    function addMovie(movie) {
        dispatch({type: "add movie", payload: movie});
    }

    function findMovie(searchText) {
        dispatch({ type: "find movie", payload: searchText});
    } 

    return (
        <MovieContext.Provider
            value={{
                movies,
                searchedMovies,
                changeGenre,
                displayMovies,
                changeRating,
                changeYear,
                handleStar,
                rating,
                releaseYear,
                genre,
                addMovie,
                findMovie
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

export const useMovie = () => useContext(MovieContext);

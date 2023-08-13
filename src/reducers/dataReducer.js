import { movieData } from "../data/movieData";

export const Initial_State = {
    genre: "All",
    releaseYear: "Release Year",
    rating: "Rating",
    searchedMovies: [],
    movies: JSON.parse(localStorage.getItem("movies")) ?? movieData,
};

export function dataReducer(state, action) {
    switch (action.type) {
        case "change genre": {
            return {...state, genre: action.payload};
        }
        case "change rating": {
            return {...state, rating: action.payload};
        }
        case "change year": {
            return {...state, releaseYear: action.payload};
        }
        case "change star": {
            const updatedMovies = state.movies.map(movie => {
                if(movie.id === action.payload.id) {
                    
                    return {...movie, star: action.payload.star};
                }
                return movie;
            })
            
            return {...state, movies: updatedMovies,}
        }
        case "add movie": {
            const updatedMovies = [...state.movies, action.payload];
            localStorage.setItem("movies", JSON.stringify(updatedMovies));
            return { ...state, movies: updatedMovies};
        }
        case "find movie": {
            if(action.payload === "") {
                return {...state, searchedMovies: []}
            }
            const searchResults = state.movies.filter(movie => movie.title.toLowerCase().includes(action.payload));
            return {...state, searchedMovies: searchResults}
        }
        case "reset search": {
            return {
                ...state, 
                searchedMovies: [],
            }
        }
    }
}

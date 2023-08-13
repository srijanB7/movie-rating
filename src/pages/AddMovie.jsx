import React, { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { useMovie } from "../contexts/Moviecontext";
import "../App.css";

export const AddMovie = () => {
    const { addMovie } = useMovie();
    function handleSubmit(event) {
        event.preventDefault();
        const newMovie = {
            id: crypto.randomUUID(),
            title,
            year,
            rating,
            director,
            writer: "srijan",
            genre: genre.split(", "),
            cast: cast.split(", "),
            summary,
            imageURL: image,
        };
        addMovie(newMovie);
        setTitle("");
        setYear(1990);
        setRating(10);
        setGenre("");
        setCast("");
        setSummary("");
        setImage("");
    }
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(1990);
    const [rating, setRating] = useState(10);
    const [genre, setGenre] = useState("");
    const [cast, setCast] = useState("");
    const [summary, setSummary] = useState("");
    const [image, setImage] = useState("");
    const [director, setDirector] = useState("");

    return (
        <div>
            <Navbar />
            <div className="add-movie-content">
                <form onSubmit={handleSubmit}>
                    <div className="user-input">
                        <label>title</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="user-input">
                        <label>year</label>
                        <input
                            type="number"
                            required
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                    <div className="user-input">
                        <label>rating</label>
                        <input
                            type="number"
                            required
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </div>
                    <div className="user-input">
                        <label>genre:</label>
                        <input
                            type="text"
                            required
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                    </div>
                    <div className="user-input">
                        <label>Director:</label>
                        <input
                            type="text"
                            value={director}
                            onChange={(e) => setDirector(e.target.value)}
                        />
                    </div>
                    <div className="user-input">
                        <label>cast</label>
                        <input
                            type="text"
                            required
                            value={cast}
                            onChange={(e) => setCast(e.target.value)}
                        />
                    </div>
                    <div className="user-input">
                        <label>summary</label>
                        <input
                            type="text"
                            required
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                        />
                    </div>

                    <div className="user-input">
                        <label>image URL</label>
                        <input
                            type="url"
                            required
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                    <button className="add-movie-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

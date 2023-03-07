import React from "react";
import MovieItem from "./Movie";
import movies from "../data/movieArray";
import './Movie.css';



function MovieList({lista=movies}){
    return(
        <div className="MovieList">
            {lista.map(filme => <MovieItem {...filme}/>)}
        </div>
    )
}


export default MovieList;
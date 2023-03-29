import React from "react";
import { useState } from "react";
import { AbsButton } from "./Buttons";
import MovieItem from "./Movie";
import Insert from "./Insert";
import movies from "../data/movieArray";
import './Movie.css';



function MovieList({lista=movies}){
    const [getInsert,setInsert] = useState(undefined);
    return<>
    
        <div className="Formulario">{getInsert}</div>
        <AbsButton
            value={"New Movie"} variavel={7}
            propriedades={onclick=()=>{ setInsert(<Insert/>) } }
        />

        <div className="MovieList">
            {lista.map(filme => <MovieItem {...filme}/>)}
        </div>
    </>
}


export default MovieList;
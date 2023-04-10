import React from "react";
import { useState } from "react";
import { AbsButton } from "./Buttons";
import MovieItem from "./Movie";
import Insert from "./Insert";
import movies from "../data/movieArray";
import './Movie.css';



function MovieList({lista=movies}){
    const [getInsert,setInsert] = useState(undefined);
    const [btntext,setBtntext] = useState('New Movie');
    const [filmsList,setFilms] = useState([]);

    const newMovieAdded = (thisFilm) => {
        //setFilms(thisFilm);
        console.log("O meu filme: ",thisFilm);
        //setFilms([...filmsList,thisFilm]);
    }
    
    const change = () => {
        setInsert(<Insert tituloForm="New Film Info" newFilm={film => newMovieAdded(film)} />);
        setBtntext('Sign Movie');
        const botaoPrincipal = document.getElementById('botaoPrincipal');
        document.getElementById('formulario').appendChild(botaoPrincipal);
    }

    return<>
        <div className="Formulario">{getInsert}</div>
        <AbsButton  value={btntext} variavel={7}    propriedades={ change } />
        <div className="MovieList">
            {lista.map(filme => <MovieItem {...filme}/>)}
        </div>
    </>
}



export default MovieList;
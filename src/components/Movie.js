import React from "react";
import './Movie.css';


function MovieItem({capa,titulo,genero,lancamento,plataformas}){
    return (
        <div className="MovieItem">
            <img src={capa}/>
            <div className="MovieItemText">
                <p className="title">{titulo}</p>
                <p>Genre: {genero}</p>
                <p>Release year: {lancamento}</p>
                <p>Platforms: {plataformas}</p>
            </div>
        </div>
    )
}


export default MovieItem;
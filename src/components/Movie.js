import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { BsFillPinAngleFill } from "react-icons/bs";
import './Movie.css';



function MovieItem({id,favorito=false,capa,titulo,genero,lancamento,plataformas,deleteAction,favoriteAction,estilo}){
    return (
        <div className={estilo}>
            <img src={capa} alt={titulo}/>
            <AiFillCloseSquare size={20} className="deleteIcon" onClick={deleteAction}/>
            <BsFillPinAngleFill size={20} className="favoriteIcon" onClick={favoriteAction}/>
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
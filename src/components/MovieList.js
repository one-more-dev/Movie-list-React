import React, { useState, useEffect } from "react";
import { AbsButton } from "./Buttons";
import MovieItem from "./Movie";
import Insert from "./Insert";
import movies from "../data/movieArray";
import './Movie.css';





function MovieList({lista=movies}){
    
    const [getInsert,setInsert] = useState(undefined);
    const [btntext,setBtntext] = useState('New Movie');
    let [getList,setList] = useState([]);

    useEffect(()=>{
        setList(getList);   //console.log("Eu fiz alguma coisa");
    },[getList]);
    
    let newMovieAdded = (thisFilm) => {
       setList([...getList,thisFilm]);
    }

    function change(){        
        setInsert(<Insert 
            tituloForm="New Film Info"
            newFilm={(film) => newMovieAdded(film)}
        />);
        setBtntext('Sign Movie');
        setTimeout(() =>{
            const botaoPrincipal = document.getElementById('botaoPrincipal');
            document.getElementById('formulario').appendChild(botaoPrincipal);
        });
    }

    return<>
        <div className="Formulario">{getInsert}</div>
        <AbsButton value={btntext} variavel={7} propriedades={ change } />
        <div className="MovieList">
            {lista.map(filmeFixo => <MovieItem key={filmeFixo.titulo} {...filmeFixo}/>)}
            {getList.map(filmeDinamo => <MovieItem key={filmeDinamo.titulo} {...filmeDinamo}/>)}
        </div>
    </>
}



export default MovieList;
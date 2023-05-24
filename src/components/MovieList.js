import React, { useState, useEffect } from "react";
import { AbsButton } from "./Buttons";
import MovieItem from "./Movie";
import Insert from "./Insert";
import movies from "../data/movieArray";
import './Movie.css';



function MovieList({lista=movies,estiloDosFilmes}){

    const [getInsert,setInsert] = useState(undefined);
    const [btntext,setBtntext] = useState('New Movie');
    const [getList,setList] = useState(lista);
    const [getFavoriteSection,setFavoriteSection] = useState([]);

    useEffect(()=>{
        setList(getList);
        setFavoriteSection(getFavoriteSection);
    },[getList,getFavoriteSection]);
    

    let newMovieAdded = (thisFilm) => {
        if(thisFilm.favorito === false){
            setList([...getList,thisFilm]);
        }else{
            setFavoriteSection([...getFavoriteSection,thisFilm]);
        }
    }

    
    function change(){        
        setInsert(<Insert
            tituloForm="New Film Info"
            newFilm={(film) => newMovieAdded(film)}
        />);
        setBtntext('Sign Film');
        setTimeout(() =>{
            const botaoPrincipal = document.getElementById('botaoPrincipal');
            document.getElementById('formulario').appendChild(botaoPrincipal);
        });
    }


    function filterMovieList(listToSet,listToGet,selectedId){
        listToSet(listToGet.filter(filme => filme.id !== selectedId));
    }

    function deleteMovie(thisFilm,selectedId){
        if(window.confirm(`Delete ${thisFilm.titulo} from your movie list`) === true){
            filterMovieList(setList,getList,selectedId);
            filterMovieList(setFavoriteSection,getFavoriteSection,selectedId);
        }else{}
    }

    function favoriteMovie(thisFilm,selectedId){
        if(thisFilm.favorito === false){
            thisFilm.favorito = true;
            setFavoriteSection([...getFavoriteSection,thisFilm]);
            filterMovieList(setList,getList,selectedId);
        }else if(thisFilm.favorito === true){
            thisFilm.favorito = false;
            filterMovieList(setFavoriteSection,getFavoriteSection,selectedId);
            newMovieAdded(thisFilm);
        }
    }


    return<>
        <div className="Formulario">{getInsert}</div>
        <AbsButton id='botaoPrincipal' value={btntext} funcao={ change } />
        <div className="Favoritos">
            {getFavoriteSection.map(filme =><MovieItem
                key={filme.id} {...filme} 
                deleteAction={()=>{deleteMovie(filme,filme.id)}}
                favoriteAction={()=>{favoriteMovie(filme,filme.id)}}
                estilo={estiloDosFilmes}
            />)}    
        </div>
        <div className="MovieList">
            {getList.map(filme =><MovieItem
                key={filme.id} {...filme} 
                deleteAction={()=>{deleteMovie(filme,filme.id)}}
                favoriteAction={()=>{favoriteMovie(filme,filme.id)}}
                estilo={estiloDosFilmes}
            />)}
        </div>
    </>
}



export default MovieList;
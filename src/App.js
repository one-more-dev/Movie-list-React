import Banner from './components/Banner';
import MovieList from './components/MovieList';
import { AbsButton } from './components/Buttons'; 
import './index.css';
import './components/Movie.css';
import { useState } from 'react';


const preto_branco = ["#000000","#FFFFFF"]; 
let defaultLayout = true;

function lightFunction(this_class){
  let estilo = document.getElementsByClassName(this_class)[0].style;
  preto_branco.reverse();
  estilo.color = preto_branco[0];
  estilo.backgroundColor = preto_branco[1];
}

function changeStyle(classe1,classe2){
  defaultLayout = !defaultLayout;
  return defaultLayout ? classe1 : classe2;
}



function App() {
  const [getEstilo,setEstilo] = useState("MovieItem"); 

  return (
    <div className='mainstyle'>
      <Banner bannertitle={"Let's watch!"}/>
      <div className='mainbody' data-corpoprincipal>
        <p className='mainbodytext'>A personal list of films that haven't watched yet, but want to.</p>
        <MovieList estiloDosFilmes={getEstilo}/>
        <p>
          <AbsButton value={"Light/Dark"} funcao={()=> { lightFunction("mainbody") }} />
          <AbsButton value={"Change Layout"} funcao={()=>{ setEstilo(changeStyle('MovieItem','MovieItem2')) }}/>
        </p>
      </div>
    </div>
  );
}


export default App;

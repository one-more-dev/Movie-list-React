import Banner from './components/Banner';
import MovieList from './components/MovieList';
import { AbsButton } from './components/Buttons'; 
import './index.css';
import './components/Movie.css';


function App() {

  return (
    <div className='mainstyle'>
      <Banner bannertitle={"Let's watch!"}/>
      <div className='mainbody' data-corpoprincipal>
        <p className='mainbodytext'>A personal list of movies I haven't watched yet, but want to.</p>
        <MovieList />
        <p>
          <AbsButton value={"Light/Dark"} variavel={0} propriedades={'mainbody'} />
          <AbsButton value={"Layout"} variavel={1} propriedades={['.MovieItem','MovieItem2']} />
        </p>
      </div>
    </div>
  );
}


export default App;

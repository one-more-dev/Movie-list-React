import Banner from './components/Banner';
import MovieList from './components/MovieList';
import { LightButton, ToggleButton } from './components/Buttons'; 
import './index.css';


function App() {
  return (
    <div className='mainstyle'>
      <Banner bannertitle={"Let's watch!"}/>
      <div className='mainbody' data-corpoprincipal>
        <p className='mainbodytext'>A simple list of movies I still haven't watched, but want to.</p>
        <MovieList />
        <p><LightButton /><ToggleButton /></p>
      </div>
    </div>
  );
}


export default App;

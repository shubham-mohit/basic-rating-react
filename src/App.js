
import './App.css';
import Movie from './component/Movie';
import {Navbar} from './component/header'
import Movies from './data.json'
import Opinion from './component/Opinion';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Navbar/>
      <h2 className='headername'> HERE ARE SOME MOVIES </h2>
      <div className='main'>
      {
          Movies.map((element)=>{
            return(
            <Movie 
            title ={element.Title} 
            year={element.Year}  
            img = {element.Poster}
            imdb = {element.imdbID}
            />
            )
          })
      }
      </div>
      <div>
        <Opinion/>
      </div>
    </div>
  );
}

export default App;

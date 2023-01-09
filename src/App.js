import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Details from './Details';
import data from './data';
import Filmmovies from "./filmmovies"
import { useState } from 'react';


function App () {
  const [movies,setMovies] = useState(data)

  
  return (
    <Router>
      
      <Routes>
        <Route index element={<Filmmovies movies={movies} setMovies={setMovies}/>}></Route>
        <Route path='/movies/:idmovie' element={<Details movies={movies}/>}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;
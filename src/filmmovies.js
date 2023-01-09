import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {useState} from 'react'
import MovieLists from './component/movielists';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './component/addmovie';
import Filtre from './component/filtre';



function Filmmovies({movies,setMovies}) {
  const [search,setSearch] = useState('');
  const [rate, setRate] = useState(0)
  const AddNewMovie = (kk)=>{
      setMovies([...movies, kk])
  }
  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:'space-around',gap:'40px',margin:'40px 0px'}}>
        <AddMovie AddNewMovie={AddNewMovie}/>
        <Filtre setSearch={setSearch} setRate={setRate}></Filtre>
      </div>
      <MovieLists movies={movies.filter(movie=> movie.title.toLocaleLowerCase().trim().includes(search) && movie.rating>= rate)} />
    </div>
  );
}

export default Filmmovies;

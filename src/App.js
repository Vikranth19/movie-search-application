import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import Popup from './components/Popup';

const MOVIE_API_URL = 'http://www.omdbapi.com/?s=furious&apikey=4ec68172'
function App() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [errMsg, setErrmsg] = useState('')
  const [searched,setSearched] = useState(false)

  const [selected, setSelected] = useState({})

  useEffect(() => {
     fetch(MOVIE_API_URL)
     .then(response => response.json())
     .then(jsonResponse => {
       setMovies(jsonResponse.Search)
       setLoading(false)
     })

  }, [])

  const search = searchValue =>{
    const SEARCH_URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=4ec68172`
    setLoading(true)
    setErrmsg(null)
    fetch(SEARCH_URL)  
    .then(response => response.json())
    .then(jsonResponse => {
      if(jsonResponse.Response === 'True'){
        setMovies(jsonResponse.Search)
        setLoading(false)
        setSearched(true)
      }else{
        setErrmsg(jsonResponse.Error)
        setLoading(false)
      }
    })
  }

  // 33:18

  const openPopup = (id) =>{
    const SPECIFIC_MOVIE_URL = `http://www.omdbapi.com/?i=${id}&apikey=4ec68172`
    setLoading(true)
    setErrmsg(null)
    fetch(SPECIFIC_MOVIE_URL)
    .then(response => response.json())
    .then(jsonResponse =>{
      if(jsonResponse.Response === 'True'){
        setLoading(false)
        setSelected(jsonResponse)
      }else{
        setErrmsg(jsonResponse.Error)
        setLoading(false)
      }
    })
  }

  const closePopup = () =>{
    setSelected({})
  }

  return (
    <div className="App">
       <Header title='my-movie DB' closePopup={closePopup}/>
       <Search search={search}/>
       <div className="App-intro">{searched? 'Here are your results' : 'Listing few of your all time favourites'}</div>
       <div className="movies">
         {
           loading && !errMsg?
           (<span>Loading...</span>):
           errMsg?
           <div className="errorMessage">{errMsg}</div>:
           movies.map((movie,index) => {
               return <Movie movie={movie} key={`${index}-${movie.Title}`} openPopup={openPopup}/>  
           })
         }
       </div>
       {
         typeof selected.Title !== 'undefined'?<Popup selected={selected} closePopup={closePopup}/>:false
       }
    </div>
  );
}

export default App;

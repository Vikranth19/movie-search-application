import React from 'react'

function Movie({movie, openPopup}) {
    const url ='https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-stock-vector-no-image-available-icon-flat-vector-illustration.jpg?ver=6'
    const poster = movie.Poster === 'N/A' ? url: movie.Poster
    return (
            <div className="movie" onClick={() => openPopup(movie.imdbID)}>
                 <h2 className='movie-title'>{movie.Title}</h2>
                 <hr/>
                 <div className='movieImg'>
                     <img width='200' src={poster} alt={`movie titled : ${movie.Title}`}/>
                 </div>
                 <hr/>
                 <p className='year'>{movie.Year}</p>
            </div>
    )
}

export default Movie

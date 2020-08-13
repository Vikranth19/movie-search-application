import React from 'react'
import Header from './Header'

function Popup({selected, closePopup}) {
    return (
        <section className='popup'>
            <Header title='my-movie DB' closePopup={closePopup}/>
             <div className="content">
                <h2>{selected.Title} <span>{selected.Year}</span></h2>
                <p className="rating">Rating : {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster} alt="Poster"/>
                    <div className="moviePlot">
                        <div className="detail">
                            <h3 className='heading'>Director:</h3>
                            <p>{selected.Director}</p>
                        </div>

                        <div className="detail">
                            <h3 className='heading'>Genre:</h3>
                            <p>{selected.Genre}</p>
                        </div>

                        <div className="detail">
                            <h3 className='heading'>Plot:</h3>
                            <p>{selected.Plot}</p>
                        </div>
                    </div>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
             </div>
        </section>
    )
}

export default Popup

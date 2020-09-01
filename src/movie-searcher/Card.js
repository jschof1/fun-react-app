import React from 'react';
import './movie.css';
import '../style.css'

export default function Card({movie}) {
    return (
        <div>
        <div style={{minWidth: "10em", maxHeight:"20em"}} className="card">   
        <div style={{minWidth: "10em"}} className="card--movie" key={movie.id} >
           <img className="card--image"
               src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
               alt={movie.title + ' poster'}
               />
         
           <h3>{movie.title}</h3>
           <div className="cardContent">
           <p><div className="bold">Release Date: </div> {movie.release_date}</p>
           <p><div className="bold">Rating: </div> {movie.vote_average}</p>
           <p><div className="bold"> Description:</div> {movie.overview}</p>
           </div>
           </div>
           </div>
        </div>
   )
}
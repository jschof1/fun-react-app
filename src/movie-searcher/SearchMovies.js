import React, {useState} from "react";
import Card from './Card.js';
import './movie.css'

let key = 'b302a8f70b7cbdb9d71daff76e8e257a'

export default function SearchMovies(){

const [query, setQuery] = useState('')  

const [movies, setMovies] = useState([])


    const searchMovies = async (e) => {
        e.preventDefault();
 
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url)
            
            const data = await res.json()

            setMovies(data.results || [])

        } 
        catch(err){
            console.log(err)
        }
    } 


        return (
            
            <div className="card">  
                <h3> Movie Searcher <span role='img' aria-label='movie_icon'> 🎥</span></h3>
                <div className="movieInput"> 
                    <form className="form" onSubmit={searchMovies}>
                        <label className="label" htmlFor="query">Movie Name</label>
                        <br></br>  <br></br> 
                        <input className="input" type="text" name="query"
                            placeholder="i.e. Jurassic Park"
                            value={query} onChange={(e) => setQuery(e.target.value)}
                            />
                        <br></br><br></br>
                        <button className="button" type="submit">Search</button>
                    </form>
                </div>
                <div className="card-list">
                    {
                        movies.length
                    ?
                        movies
                        .filter(movie => 
                            movie.poster_path
                        )
                        .map(movie => 
                           <Card movie={movie} key={movie.id} />
                       )
                    :
                        <div></div>
                    }
                </div>  
            </div>  
                
               )
           }

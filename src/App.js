import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'
import Quotes from './stoic-quote-generator/Quotes'
import './style.css'
import SearchMovies from './movie-searcher/SearchMovies'
import Meme from './meme-generator/Meme'
import MainCalculator from './calculator/MainCalculator';
import Game from './noughts-crosses/Game';
import Stopwatch from './stopwatch-component/Stopwatch';
import Paint from './paint-application/Paint'


function App() {
    return (
<div>
    <Carousel showThumbs={false} >
        <div className="CarStyle" >
           <div className="appPos"> <Quotes /> </div>
        </div>
        <div className="CarStyle">
           <div className="appPos"> <SearchMovies /> </div>
        </div>
        <div className="CarStyle">
           <div className="appPos"> <Meme /> </div>
        </div>
        <div className="CarStyle">
           <div className="appPos"> <Paint /> </div>
        </div>
        <div className="CarStyle">
           <div className="appPos"> <MainCalculator /> </div>
        </div>
        <div className="CarStyle">
           <div className="appPos"> <Game /> </div>
        </div>
        <div className="CarStyle">
           <div className="appPos"> <Stopwatch /> </div>
        </div>
    </Carousel>
    </div> 

);
}

export default App
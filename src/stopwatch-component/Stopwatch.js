import React, {useState} from "react";
import { useStopwatch } from "./customHooks.js";


const Stopwatch = () => {
  const [click,setClick] = useState(false)

  const { elapsedTime, startTime, stopTime, resetTime } = useStopwatch();

  return (
    
    <div className="card">
      <h3> Stopwatch <span>⏱</span> </h3>
      <div className="stopwatches">
        <article style={{padding: 50 +'px'}}>
          <h1>{elapsedTime}s</h1>
          {
            !click
          ?
            <button onClick={()=>{
              setClick(!click)
              startTime()
            }}>
              {parseFloat(elapsedTime) ? 'Continue':'Start'}
            </button>
          :
            <button onClick={()=>{
              stopTime()
              setClick(!click)
            }}>
              Stop
            </button>
          }
          <button onClick={resetTime}>Reset</button>
        </article>
      </div>
    </div>

  );
};

export default Stopwatch
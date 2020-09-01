import React, {useState} from "react";
import "./calcStyle.css";

function MainCalculator() {
  
  const [input, setInput] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach(item => {
    calcBtns.push(
      <button style={{fontSize:"20px"}}
        onClick={e => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

  return (

  <div className="card">
  <h3 className="name">Calculator <span role='img' aria-label='calculator'>🔢</span> </h3>
    <div className="wrapper">
      {" "} 
      <div className="show-input">{input} <br/></div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        {/* clear button */}

        <button onClick={() => setInput(input.substr(0, input.length - 1))}>
          Clear
        </button>

        {/* clear all */}
        <button onClick={() => setInput("")} value="">
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {/* add button */}
        <button onClick={e => setInput(input + e.target.value)} value="+">
          +
        </button>

        {/* minus btn */}
        <button onClick={e => setInput(input + e.target.value)} value="-">
          {" "}
          - {" "}
        </button>

        <button onClick={e => setInput(input + e.target.value)} value="*">
          {" "}
          x
        </button>

        <button onClick={e => setInput(input + e.target.value)} value="/">
          {" "}
          ÷
        </button>
        {/* "=" btn */}
        <button
          onClick={e => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
    </div>

  );
}

export default MainCalculator
import React, { useState } from "react";
import Clickables from "./Clickables";

function App() {
  const [str, updateStr] = useState("");
  const [arr, updateArr] = useState([]);

  function displayCalc(val) {
    updateArr((prevValue) => {
      return [...prevValue, val];
    });

    // console.log(arr);
  }
  function displayResult() {
    updateStr(() => arr.join(""));
    console.log("test:" + str);
  }
  return (
    <div className="container">
      <h3>{str}</h3>
      <h1>{}</h1>
      <div className="main">
        <div className="inner">
          <Clickables val="C" handleClick={displayCalc} cName="whiteIcons" />
          <Clickables val="7" handleClick={displayCalc} />
          <Clickables val="4" handleClick={displayCalc} />
          <Clickables val="1" handleClick={displayCalc} />
          <Clickables val="0" handleClick={displayCalc} />
        </div>
        <div className="inner">
          <Clickables
            val={
              <img
                src="https://img.icons8.com/material/24/ffffff/square-root--v1.png"
                alt="square root"
              />
            }
            handleClick={displayCalc}
            cName="icons"
          />

          <Clickables val="8" handleClick={displayCalc} />
          <Clickables val="5" handleClick={displayCalc} />
          <Clickables val="2" handleClick={displayCalc} />
          <Clickables val="." handleClick={displayCalc} />
        </div>
        <div className="inner">
          <Clickables
            val={
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/square-number.png"
                alt="square of number"
              />
            }
            handleClick={displayCalc}
            cName="icons"
          />
          <Clickables val="9" handleClick={displayCalc} />
          <Clickables val="6" handleClick={displayCalc} />
          <Clickables val="3" handleClick={displayCalc} />
          <Clickables
            val={
              <img
                src="https://img.icons8.com/material/24/a7a7a7/clear-symbol--v1.png"
                alt="clear symbol"
              />
            }
            handleClick={displayCalc}
            cName="icons"
          />
        </div>
        <div className="inner" id="col4">
          <Clickables val="/" handleClick={displayCalc} />
          <Clickables val="x" handleClick={displayCalc} />
          <Clickables val="-" handleClick={displayCalc} />
          <Clickables val="+" handleClick={displayCalc} />
          <Clickables val="=" cName="equalsButton" />
        </div>
      </div>
      <button onClick={displayResult}>test</button>
    </div>
  );
}
export default App;

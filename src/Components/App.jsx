import React, { useState } from "react";
// import Clickables from "./Clickables";
import Button from "@material-ui/core/Button";

function App() {
  // const [str, updateStr] = useState("");
  // const [arr, updateArr] = useState([]);
  function handleClick(e) {
    console.log(e.currentTarget.value);
  }
  // function displayCalc(val) {
  //   updateArr((prevValue) => {
  //     return [...prevValue, val];
  //   });

  //   console.log(arr);
  // }
  // function displayResult() {
  //   updateStr(() => arr.join(""));
  //   console.log("test:" + str);
  // }
  return (
    <div className="container">
      <h3>hello</h3>
      <h1>{}</h1>
      <div className="main">
        <div className="inner">
          <Button value="C" id="whiteIcons" onClick={handleClick}>
            C
          </Button>
          <Button value="7" onClick={handleClick}>
            7
          </Button>
          <Button value="4" onClick={handleClick}>
            4
          </Button>
          <Button value="1" onClick={handleClick}>
            1
          </Button>
          <Button value="0" onClick={handleClick}>
            0
          </Button>
        </div>
        <div className="inner">
          <Button
            value={
              <img
                src="https://img.icons8.com/material/24/ffffff/square-root--v1.png"
                alt="square root"
              />
            }
            id="icons"
            onClick={handleClick}
          >
            <img
              src="https://img.icons8.com/material/24/ffffff/square-root--v1.png"
              alt="square root"
            />
          </Button>

          <Button value="8" onClick={handleClick}>
            8
          </Button>
          <Button value="5" onClick={handleClick}>
            5
          </Button>
          <Button value="2" onClick={handleClick}>
            2
          </Button>
          <Button value="." onClick={handleClick}>
            .
          </Button>
        </div>
        <div className="inner">
          <Button
            value={
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/square-number.png"
                alt="square of number"
              />
            }
            onClick={handleClick}
            id="icons"
          >
            <img
              src="https://img.icons8.com/material-outlined/24/ffffff/square-number.png"
              alt="square of number"
            />
          </Button>
          <Button value="9" onClick={handleClick}>
            9
          </Button>
          <Button value="6" onClick={handleClick}>
            6
          </Button>
          <Button value="3" onClick={handleClick}>
            3
          </Button>
          <Button
            value={
              <img
                src="https://img.icons8.com/material/24/a7a7a7/clear-symbol--v1.png"
                alt="clear symbol"
              />
            }
            id="icons"
            onClick={handleClick}
          >
            <img
              src="https://img.icons8.com/material/24/a7a7a7/clear-symbol--v1.png"
              alt="clear symbol"
            />
          </Button>
        </div>
        <div className="inner" id="col4">
          <Button value="/" onClick={handleClick}>
            /
          </Button>
          <Button value="x" onClick={handleClick}>
            x
          </Button>
          <Button value="-" onClick={handleClick}>
            -
          </Button>
          <Button value="+" onClick={handleClick}>
            +
          </Button>
          <Button val="=" id="equalsButton" onClick={handleClick}>
            =
          </Button>
        </div>
      </div>
      {/* <button onClick={displayResult}>test</button> */}
    </div>
  );
}
export default App;

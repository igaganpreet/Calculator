import React, { useState } from "react";
import Button from "@material-ui/core/Button";

function App() {
  const [str, updateStr] = useState("");
  const [arr, updateArr] = useState([]);
  const [result, updateResult] = useState("0");
  function handleClick(e) {
    if (e.currentTarget.value === "back") {
      updateArr((prevValue) => {
        const array = arr.slice(0, -1);
        updateStr(() => {
          const value = array.join("");
          return value;
        });
        return array;
      });
    } else if (e.currentTarget.value === "C") {
      updateArr([]);
      updateStr(" ");
      updateResult("0");
    } else {
      updateArr((prevValue) => {
        const array = [...prevValue, e.currentTarget.value];
        updateStr(() => {
          const value = array.join("");
          return value;
        });
        return array;
      });
    }
  }

  function handleCalculation() {
    if (
      arr.includes("+") ||
      arr.includes("-") ||
      arr.includes("*") ||
      arr.includes("/")
    ) {
      updateResult(eval(str));
    } else {
      updateResult(str);
    }
  }
  return (
    <div className="container">
      <h3>{str}</h3>
      <h1>{result}</h1>
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
          <Button value="(" onClick={handleClick}>
            (
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
          <Button value=")" onClick={handleClick}>
            )
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

          <Button value="back" id="icons" onClick={handleClick}>
            <img
              src="https://img.icons8.com/material/24/a7a7a7/clear-symbol--v1.png"
              alt="back symbol"
            />
          </Button>
        </div>
        <div className="inner" id="col4">
          <Button value="/" onClick={handleClick}>
            /
          </Button>
          <Button value="*" onClick={handleClick}>
            x
          </Button>
          <Button value="-" onClick={handleClick}>
            -
          </Button>
          <Button value="+" onClick={handleClick}>
            +
          </Button>
          <Button val="=" id="equalsButton" onClick={handleCalculation}>
            =
          </Button>
        </div>
      </div>
    </div>
  );
}
export default App;

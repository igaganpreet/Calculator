import React from "react";
import Clickables from "./Clickables";
import BackspaceIcon from "@material-ui/icons/Backspace";
function App() {
  return (
    <div className="container">
      <h3>1_435+353%56</h3>
      <h1>456</h1>
      <div className="main">
        <div className="inner">
          <Clickables val="C" cName="whiteIcons" />
          <Clickables val="7" />
          <Clickables val="4" />
          <Clickables val="1" />
          <Clickables val="0" />
        </div>
        <div className="inner">
          <Clickables
            val={
              <img src="https://img.icons8.com/material/24/ffffff/square-root--v1.png" />
            }
            cName="icons"
          />

          <Clickables val="8" />
          <Clickables val="5" />
          <Clickables val="2" />
          <Clickables val="." />
        </div>
        <div className="inner">
          <Clickables
            val={
              <img src="https://img.icons8.com/material-outlined/24/ffffff/square-number.png" />
            }
            cName="icons"
          />
          <Clickables val="9" />
          <Clickables val="6" />
          <Clickables val="3" />
          <Clickables
            val={
              <img src="https://img.icons8.com/material/24/ffffff/clear-symbol--v1.png" />
            }
            cName="icons"
          />
        </div>
        <div className="inner" id="col4">
          <Clickables val="/" />
          <Clickables val="X" />
          <Clickables val="-" />
          <Clickables val="+" />
          <Clickables val="=" cName="equalsButton" />
        </div>
      </div>
    </div>
  );
}
export default App;

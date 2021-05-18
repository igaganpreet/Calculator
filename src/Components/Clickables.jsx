import React from "react";
import Button from "@material-ui/core/Button";

function Clickable(props) {
  function getValue(e) {
    console.log(e.currentTarget.value);
    return props.handleClick(e.currentTarget.value);
  }
  if (props.cName) {
    return (
      <Button
        id={props.cName}
        value={props.val}
        className="valButton"
        onClick={getValue}
      >
        {props.val}
      </Button>
    );
  } else {
    return (
      <Button className="valButton" value={props.val} onClick={getValue}>
        {props.val}
      </Button>
    );
  }
}
export default Clickable;
